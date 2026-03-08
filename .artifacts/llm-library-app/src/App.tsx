import { useEffect, useMemo, useState } from "react";

type LibraryItem = {
  id: string;
  title: string;
  fileName: string;
  primaryTag: string;
  secondaryTags: string[];
  sourcePath: string;
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
};

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

function App({ dataUrl }: AppProps) {
  const searchInputId = "llm-library-search";
  const [payload, setPayload] = useState<LibraryPayload | null>(null);
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
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
            className="llm-library-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="llm-library-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="llm-library-modal-header">
              <div>
                <p className="llm-library-eyebrow">Detail</p>
                <h3 id="llm-library-modal-title">{selectedItem.title}</h3>
              </div>
              <button type="button" className="llm-library-close" onClick={() => setSelectedId(null)}>
                关闭
              </button>
            </header>

            <div className="llm-library-modal-body">
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
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}

export default App;
