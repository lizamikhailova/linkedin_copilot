import { AppShell } from "@/components/AppShell";
import { QueuePreview } from "@/components/QueuePreview";
import { SectionCard } from "@/components/SectionCard";
import { appConfig } from "@/lib/config";
import styles from "./page.module.scss";

export function HomePage() {
  return (
    <AppShell>
      <section className={styles.hero}>
        <p>MVP Scaffold</p>
        <h1 className={styles.heroTitle}>
          Review LinkedIn posts with guardrails first.
        </h1>
        <p className={styles.heroDescription}>
          This scaffold gives us a local review app, a capture-only browser helper,
          and the initial domain model for queueing, blocking, and defer logic.
        </p>
      </section>

      <section className={styles.cardGrid}>
        <SectionCard
          title="Capture"
          description="Browser helper sends selected LinkedIn posts into the local inbox."
        />
        <SectionCard
          title="Analyze"
          description="Posts receive summary, score, blacklist checks, and action recommendation."
        />
        <SectionCard
          title="Review"
          description="The queue is filtered by guardrails, with daily action limits applied to final actions."
        />
      </section>

      <QueuePreview />

      <section className={styles.layoutCard}>
        <h2>Project Layout</h2>
        <pre className={styles.structure}>{appConfig.structure}</pre>
      </section>
    </AppShell>
  );
}

export default HomePage;
