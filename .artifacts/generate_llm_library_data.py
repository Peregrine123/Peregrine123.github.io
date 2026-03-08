#!/usr/bin/env python3

from __future__ import annotations

import json
import re
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
SHOWCASE_DIR = REPO_ROOT / "_llm_showcase" / "全部文章"
MANIFEST_PATH = REPO_ROOT / "_llm_showcase" / "来源路径清单.tsv"
OUTPUT_PATH = REPO_ROOT / "assets" / "json" / "llm-library-data.json"
PREVIEW_LIMIT = 240

WIKILINK_PATTERN = re.compile(r"\[\[([^\]|]+)(?:\|([^\]]+))?\]\]")
INLINE_CODE_PATTERN = re.compile(r"`([^`]+)`")
MARKDOWN_LINK_PATTERN = re.compile(r"\[([^\]]+)\]\([^)]+\)")
MARKDOWN_IMAGE_PATTERN = re.compile(r"!\[([^\]]*)\]\([^)]+\)")
HTML_TAG_PATTERN = re.compile(r"<[^>]+>")
HEADING_OR_LIST_PATTERN = re.compile(r"^\s*(#{1,6}|\d+\.|[-*+>])\s*")
EMPHASIS_PATTERN = re.compile(r"[*_~]+")
MULTISPACE_PATTERN = re.compile(r"\s+")


def load_source_map() -> dict[str, str]:
    source_map: dict[str, str] = {}
    if not MANIFEST_PATH.exists():
        return source_map

    with MANIFEST_PATH.open("r", encoding="utf-8") as handle:
        next(handle, None)
        for line in handle:
            parts = line.rstrip("\n").split("\t")
            if len(parts) < 2:
                continue
            source_map[parts[0]] = parts[1]

    return source_map


def split_frontmatter(text: str) -> tuple[list[str], str] | tuple[None, str]:
    lines = text.splitlines()
    if len(lines) < 3 or lines[0].strip() != "---":
        return None, text

    for index in range(1, len(lines)):
        if lines[index].strip() == "---":
            return lines[1:index], "\n".join(lines[index + 1 :])

    return None, text


def parse_tags(frontmatter_lines: list[str] | None) -> list[str]:
    if not frontmatter_lines:
        return []

    tags: list[str] = []
    index = 0

    while index < len(frontmatter_lines):
        stripped = frontmatter_lines[index].strip()
        if stripped.startswith("tags:"):
            rest = stripped[5:].strip()
            if rest.startswith("[") and rest.endswith("]"):
                inline_tags = [tag.strip().strip("\"'") for tag in rest[1:-1].split(",")]
                tags.extend(tag for tag in inline_tags if tag)
            elif rest:
                inline_tags = [tag.strip().strip("\"'") for tag in re.split(r"[;,]", rest)]
                tags.extend(tag for tag in inline_tags if tag)

            nested_index = index + 1
            while nested_index < len(frontmatter_lines):
                nested_line = frontmatter_lines[nested_index]
                if re.match(r"^\s*-\s+", nested_line):
                    value = re.sub(r"^\s*-\s+", "", nested_line).strip().strip("\"'")
                    if value:
                        tags.append(value)
                    nested_index += 1
                    continue
                if not nested_line.strip():
                    nested_index += 1
                    continue
                if re.match(r"^\S[^:]*:", nested_line) or re.match(r"^\s+[^-\s][^:]*:", nested_line):
                    break
                break
            index = nested_index - 1
        index += 1

    return tags


def wikilink_replacer(match: re.Match[str]) -> str:
    explicit_text = match.group(2)
    if explicit_text:
        return explicit_text
    target = match.group(1)
    return target.split("/")[-1]


def clean_line(line: str) -> str:
    cleaned = line.strip()
    cleaned = WIKILINK_PATTERN.sub(wikilink_replacer, cleaned)
    cleaned = MARKDOWN_IMAGE_PATTERN.sub(r"\1", cleaned)
    cleaned = MARKDOWN_LINK_PATTERN.sub(r"\1", cleaned)
    cleaned = INLINE_CODE_PATTERN.sub(r"\1", cleaned)
    cleaned = HTML_TAG_PATTERN.sub(" ", cleaned)
    cleaned = HEADING_OR_LIST_PATTERN.sub("", cleaned)
    cleaned = EMPHASIS_PATTERN.sub("", cleaned)
    cleaned = cleaned.replace("|", " ")
    cleaned = MULTISPACE_PATTERN.sub(" ", cleaned).strip(" -·•\t")
    return cleaned


def build_preview(body: str) -> str:
    collected: list[str] = []
    for raw_line in body.splitlines():
        cleaned = clean_line(raw_line)
        if len(cleaned) < 4:
            continue
        collected.append(cleaned)
        joined = " · ".join(collected)
        if len(joined) >= PREVIEW_LIMIT:
            return joined[: PREVIEW_LIMIT - 1].rstrip() + "…"
        if len(collected) >= 4:
            break

    preview = " · ".join(collected)
    if not preview:
        return "暂无摘要预览。"
    if len(preview) > PREVIEW_LIMIT:
        return preview[: PREVIEW_LIMIT - 1].rstrip() + "…"
    return preview


def derive_title(file_path: Path) -> str:
    return file_path.stem.replace("_", " ").strip()


def build_records() -> dict[str, object]:
    source_map = load_source_map()
    tag_counter: Counter[str] = Counter()
    items: list[dict[str, object]] = []

    files = sorted(SHOWCASE_DIR.glob("*.md"), key=lambda path: path.name.lower())

    for index, file_path in enumerate(files, start=1):
        text = file_path.read_text(encoding="utf-8")
        frontmatter, body = split_frontmatter(text)
        tags = parse_tags(frontmatter)
        if "llm" not in {tag.casefold() for tag in tags}:
            continue

        secondary_tags = [tag for tag in tags if tag.casefold() != "llm"] or ["未分类"]
        preview = build_preview(body)
        source_path = source_map.get(file_path.name, str(file_path.relative_to(REPO_ROOT)))

        for tag in secondary_tags:
            tag_counter[tag] += 1

        items.append(
            {
                "id": f"llm-{index:03d}",
                "title": derive_title(file_path),
                "fileName": file_path.name,
                "primaryTag": "LLM",
                "secondaryTags": secondary_tags,
                "sourcePath": source_path,
                "preview": preview,
            }
        )

    return {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "totalCount": len(items),
        "tagCounts": dict(sorted(tag_counter.items(), key=lambda item: (-item[1], item[0].lower()))),
        "items": items,
    }


def main() -> None:
    if not SHOWCASE_DIR.exists():
        raise SystemExit(f"Missing source directory: {SHOWCASE_DIR}")

    payload = build_records()
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {payload['totalCount']} items to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
