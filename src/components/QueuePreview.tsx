import styles from "./QueuePreview.module.scss";

const previewRows = [
  {
    author: "Founder, B2B SaaS",
    summary: "Detailed launch retrospective with concrete pipeline lessons.",
    score: 84,
    action: "Comment candidate",
    state: "Ready for review",
  },
  {
    author: "Growth advisor",
    summary: "Thought piece on attribution. Blacklist did not match.",
    score: 67,
    action: "Like candidate",
    state: "Ready for review",
  },
  {
    author: "VC operator",
    summary: "Interesting thread, but final action capacity is full today.",
    score: 78,
    action: "Comment candidate",
    state: "Deferred until tomorrow",
  },
];

export function QueuePreview() {
  return (
    <section className={styles.queuePreview}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Queue Preview</p>
        <h2 className={styles.title}>What we will build next</h2>
      </header>
      <div className={styles.rows}>
        {previewRows.map((row) => (
          <article className={styles.row} key={`${row.author}-${row.summary}`}>
            <div>
              <strong className={styles.author}>{row.author}</strong>
              <span className={styles.summary}>{row.summary}</span>
            </div>
            <span>{row.score}</span>
            <span>{row.action}</span>
            <span className={styles.state}>{row.state}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
