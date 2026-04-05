import styles from "./SectionCard.module.scss";

export function SectionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
