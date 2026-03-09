import { useEffect, useMemo, useRef, useState } from "react";

type LibraryItem = {
  id: string;
  title: string;
  fileName: string;
  primaryTag: string;
  secondaryTags: string[];
  sourcePath: string;
  markdownAsset: string;
  preview: string;
};

type LibraryPayload = {
  generatedAt: string;
  totalCount: number;
  tagCounts: Record<string, number>;
  items: LibraryItem[];
};

type AppProps = {
  dataUrl: string;
  markdownBaseUrl: string;
};

const WIKILINK_PATTERN = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const EMBED_WIKILINK_PATTERN = /!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

const formatGeneratedAt = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

const unwrapWikiLink = (_match: string, target: string, explicitText?: string) => {
  if (explicitText) {
    return explicitText;
  }

  return target.split("/").pop() ?? target;
};

const normalizeMarkdown = (content: string) =>
  content.replace(/\r\n/g, "\n").replace(EMBED_WIKILINK_PATTERN, unwrapWikiLink).replace(WIKILINK_PATTERN, unwrapWikiLink);

function App({ dataUrl, markdownBaseUrl }: AppProps) {
  const searchInputId = "llm-library-search";
  const [payload, setPayload] = useState<LibraryPayload | null>(null);
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [readerMode, setReaderMode] = useState(false);
  const [readerStatus, setReaderStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [readerHtml, setReaderHtml] = useState("");
  const [readerErrorMessage, setReaderErrorMessage] = useState<string | null>(null);
  const articleCache = useRef<Record<string, string>>({});
  const selectedIdRef = useRef<string | null>(null);

  useEffect(() => {
    selectedIdRef.current = selectedId;
  }, [selectedId]);

  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      try {
        setErrorMessage(null);
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const nextPayload = (await response.json()) as LibraryPayload;
        if (!cancelled) {
          setPayload(nextPayload);
        }
      } catch (error) {
        if (!cancelled) {
          const message = error instanceof Error ? error.message : "Unknown error";
          setErrorMessage(`加载 LLM Library 数据失败：${message}`);
        }
      }
    };

    void loadData();

    return () => {
      cancelled = true;
    };
  }, [dataUrl]);

  useEffect(() => {
    if (!selectedId) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (readerMode) {
        setReaderMode(false);
        return;
      }

      setSelectedId(null);
    };

    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [readerMode, selectedId]);

  useEffect(() => {
    setReaderMode(false);
    setReaderStatus("idle");
    setReaderHtml("");
    setReaderErrorMessage(null);
  }, [selectedId]);

  const items = payload?.items ?? [];

  const visibleItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items
      .filter((item) => {
        const matchesQuery =
          !normalizedQuery || item.title.toLowerCase().includes(normalizedQuery) || item.preview.toLowerCase().includes(normalizedQuery);
        const matchesTags = activeTags.length === 0 || activeTags.every((tag) => item.secondaryTags.includes(tag));

        return matchesQuery && matchesTags;
      })
      .sort((left, right) => left.title.localeCompare(right.title));
  }, [activeTags, items, query]);

  const tagEntries = useMemo(() => {
    if (!payload) {
      return [];
    }

    return Object.entries(payload.tagCounts).sort((left, right) => {
      if (right[1] !== left[1]) {
        return right[1] - left[1];
      }

      return left[0].localeCompare(right[0]);
    });
  }, [payload]);

  const selectedItem = useMemo(() => items.find((item) => item.id === selectedId) ?? null, [items, selectedId]);

  const toggleTag = (tag: string) => {
    setActiveTags((current) => (current.includes(tag) ? current.filter((entry) => entry !== tag) : [...current, tag]));
  };

  const openReader = async () => {
    if (!selectedItem) {
      return;
    }

    setReaderMode(true);
    setReaderErrorMessage(null);

    const cachedHtml = articleCache.current[selectedItem.id];
    if (cachedHtml) {
      setReaderHtml(cachedHtml);
      setReaderStatus("ready");
      return;
    }

    setReaderStatus("loading");

    try {
      const markdownUrl = new URL(selectedItem.markdownAsset, new URL(markdownBaseUrl, window.location.href)).toString();
      const response = await fetch(markdownUrl);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const markdownText = await response.text();
      const normalizedMarkdown = normalizeMarkdown(markdownText);
      const [{ marked }, { default: DOMPurify }] = await Promise.all([import("marked"), import("dompurify")]);
      const rawHtml = await marked.parse(normalizedMarkdown, {
        async: false,
        breaks: true,
        gfm: true,
      });
      const safeHtml = DOMPurify.sanitize(rawHtml, {
        USE_PROFILES: {
          html: true,
        },
      });

      if (selectedIdRef.current !== selectedItem.id) {
        return;
      }

      articleCache.current[selectedItem.id] = safeHtml;
      setReaderHtml(safeHtml);
      setReaderStatus("ready");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setReaderStatus("error");
      setReaderErrorMessage(`加载全文失败：${message}`);
    }
  };

  return (
    <div className="llm-library-app">
      <section className="llm-library-hero">
        <div>
          <p className="llm-library-eyebrow">Showcase</p>
          <h2>站内浏览的 LLM 文献卡片墙</h2>
          <p className="llm-library-intro">从当前仓库整理出的 99 篇 LLM 相关笔记。首屏只保留标题，点击后再看标签、摘要预览和原始路径。</p>
        </div>
        <div className="llm-library-metrics" aria-label="Library statistics">
          <article>
            <span>文章总数</span>
            <strong>{payload?.totalCount ?? "—"}</strong>
          </article>
          <article>
            <span>二级标签</span>
            <strong>{tagEntries.length || "—"}</strong>
          </article>
          <article>
            <span>当前结果</span>
            <strong>{visibleItems.length}</strong>
          </article>
        </div>
      </section>

      <section className="llm-library-controls" aria-label="Search and filters">
        <label className="llm-library-search">
          <span>搜索标题 / 摘要</span>
          <input
            id={searchInputId}
            name={searchInputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="例如：Agent、Qwen、Reasoning"
          />
        </label>

        <div className="llm-library-toolbar">
          <div className="llm-library-selection">
            <span>已选标签</span>
            <strong>{activeTags.length === 0 ? "全部" : activeTags.join(" · ")}</strong>
          </div>
          <button
            type="button"
            className="llm-library-reset"
            onClick={() => {
              setQuery("");
              setActiveTags([]);
            }}
            disabled={!query && activeTags.length === 0}
          >
            清空筛选
          </button>
        </div>

        <div className="llm-library-tag-grid" aria-label="Secondary tags">
          {tagEntries.map(([tag, count]) => {
            const isActive = activeTags.includes(tag);
            return (
              <button key={tag} type="button" className={isActive ? "tag-chip active" : "tag-chip"} onClick={() => toggleTag(tag)}>
                <span>{tag}</span>
                <span>{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {errorMessage ? (
        <div className="llm-library-state error" role="alert">
          {errorMessage}
        </div>
      ) : null}

      {!payload && !errorMessage ? <div className="llm-library-state">正在加载文献数据…</div> : null}

      {payload ? (
        <section className="llm-library-grid" aria-label="LLM library results">
          {visibleItems.length > 0 ? (
            visibleItems.map((item) => (
              <button key={item.id} type="button" className="llm-library-card" onClick={() => setSelectedId(item.id)}>
                <span className="llm-library-card-title">{item.title}</span>
              </button>
            ))
          ) : (
            <div className="llm-library-empty">
              <h3>没有匹配结果</h3>
              <p>试试清空关键词，或者移除部分二级标签。</p>
            </div>
          )}
        </section>
      ) : null}

      {payload ? <footer className="llm-library-footer">数据生成时间：{formatGeneratedAt(payload.generatedAt)}</footer> : null}

      {selectedItem ? (
        <div className="llm-library-modal-backdrop" onClick={() => setSelectedId(null)} role="presentation">
          <section
            className={readerMode ? "llm-library-modal llm-library-modal--reader" : "llm-library-modal"}
            role="dialog"
            aria-modal="true"
            aria-labelledby="llm-library-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="llm-library-modal-header">
              <div>
                <p className="llm-library-eyebrow">{readerMode ? "Reader" : "Detail"}</p>
                <h3 id="llm-library-modal-title">{selectedItem.title}</h3>
              </div>
              <div className="llm-library-modal-actions">
                {readerMode ? (
                  <button type="button" className="llm-library-secondary-action" onClick={() => setReaderMode(false)}>
                    返回摘要
                  </button>
                ) : (
                  <button type="button" className="llm-library-primary-action" onClick={openReader}>
                    查看全文
                  </button>
                )}
                <button type="button" className="llm-library-close" onClick={() => setSelectedId(null)}>
                  关闭
                </button>
              </div>
            </header>

            <div className="llm-library-modal-body">
              {readerMode ? (
                <>
                  <div className="llm-library-tag-list">
                    <span className="detail-chip primary">{selectedItem.primaryTag}</span>
                    {selectedItem.secondaryTags.map((tag) => (
                      <span key={tag} className="detail-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="llm-library-detail-block">
                    <h4>原始路径</h4>
                    <code>{selectedItem.sourcePath}</code>
                  </div>

                  {readerStatus === "loading" ? <div className="llm-library-state">正在加载全文并渲染 Markdown…</div> : null}

                  {readerStatus === "error" ? (
                    <div className="llm-library-state error" role="alert">
                      {readerErrorMessage}
                    </div>
                  ) : null}

                  {readerStatus === "ready" ? <article className="llm-library-reader" dangerouslySetInnerHTML={{ __html: readerHtml }} /> : null}
                </>
              ) : (
                <>
                  <div className="llm-library-tag-list">
                    <span className="detail-chip primary">{selectedItem.primaryTag}</span>
                    {selectedItem.secondaryTags.map((tag) => (
                      <span key={tag} className="detail-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="llm-library-detail-block">
                    <h4>摘要预览</h4>
                    <p>{selectedItem.preview}</p>
                  </div>

                  <div className="llm-library-detail-block">
                    <h4>原始路径</h4>
                    <code>{selectedItem.sourcePath}</code>
                  </div>

                  <div className="llm-library-detail-block">
                    <h4>继续阅读</h4>
                    <p>点击右上角的“查看全文”，会把该篇 Markdown 正文渲染后呈现出来。</p>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}

export default App;
