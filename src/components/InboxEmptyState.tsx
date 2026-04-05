import styles from "./InboxList.module.scss";

export function InboxEmptyState() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Inbox</p>
        <h2 className={styles.title}>Captured posts will land here</h2>
        <p className={styles.description}>
          Open LinkedIn, click the extension, and the current visible post will
          appear in this queue for review.
        </p>
      </header>
      <div className={styles.emptyState}>
        <strong>No captured posts yet</strong>
        <p>
          Your first captured post will show author details, the raw post text,
          capture time, and its current review status.
        </p>
      </div>
    </>
  );
}
