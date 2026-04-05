"use client";

import { useState } from "react";
import { InboxEmptyState } from "@/components/InboxEmptyState";
import {
  excerpt,
  formatCapturedAt,
  formatLabel,
} from "@/components/utils";
import { InboxPost } from "@/types/posts";
import styles from "./InboxList.module.scss";

export function InboxList({ posts }: { posts: InboxPost[] }) {
  const [expandedPosts, setExpandedPosts] = useState<Record<string, boolean>>(
    {},
  );

  function toggleExpanded(postId: string) {
    setExpandedPosts((current) => ({
      ...current,
      [postId]: !current[postId],
    }));
  }

  if (posts.length === 0) {
    return (
      <section className={styles.inbox}>
        <InboxEmptyState />
      </section>
    );
  }

  return (
    <section className={styles.inbox}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Inbox</p>
          <h2 className={styles.title}>Captured LinkedIn posts</h2>
          <p className={styles.description}>
            A simple review queue fed by the Chrome extension.
          </p>
        </div>
        <div className={styles.countBadge}>
          <strong>{posts.length}</strong>
          <span>{posts.length === 1 ? "post" : "posts"}</span>
        </div>
      </header>

      <div className={styles.rows}>
        {posts.map((post) => {
          const isExpanded = expandedPosts[post.id];
          const isLongPost = post.text.length > 240;

          return (
            <article className={styles.row} key={post.id}>
              <div className={styles.rowTop}>
                <div className={styles.identity}>
                  <strong className={styles.author}>
                    {post.authorName ?? "Unknown author"}
                  </strong>
                  <span className={styles.meta}>
                    Captured {formatCapturedAt(post.capturedAt)}
                  </span>
                </div>
                <span className={styles.status}>{formatLabel(post.status)}</span>
              </div>

              <p className={styles.text}>
                {isExpanded ? post.text : excerpt(post.text)}
              </p>

              {isLongPost ? (
                <button
                  type="button"
                  className={styles.toggle}
                  onClick={() => toggleExpanded(post.id)}
                >
                  {isExpanded ? "see less..." : "see more..."}
                </button>
              ) : null}

              <div className={styles.rowFooter}>
                <span className={styles.meta}>
                  {post.recommendedAction
                    ? `Suggested: ${formatLabel(post.recommendedAction)}`
                    : "Awaiting analysis"}
                </span>
                {post.sourceUrl ? (
                  <a
                    className={styles.link}
                    href={post.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open source post
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
