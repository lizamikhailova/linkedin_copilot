import { AppShell } from "@/components/AppShell";
import { InboxList } from "@/components/InboxList";
import { SectionCard } from "@/components/SectionCard";
import { listCapturedPosts } from "@/server/posts/service";
import { InboxPost } from "@/types/posts";
import styles from "./page.module.scss";

export default async function HomePage() {
  const posts: InboxPost[] = await listCapturedPosts();

  return (
    <AppShell>
      <section className={styles.hero}>
        <p>Inbox</p>
        <h1 className={styles.heroTitle}>
          Review captured LinkedIn posts in one place.
        </h1>
        <p className={styles.heroDescription}>
          The extension already captures the visible post. This inbox gives the app
          a simple place to list what has been saved locally and tee up the next
          analysis and review steps.
        </p>
      </section>

      <section className={styles.cardGrid}>
        <SectionCard
          title="Capture"
          description="Click the Chrome extension on LinkedIn to save the visible post into the inbox."
        />
        <SectionCard
          title="Inbox"
          description="Every saved post shows author, capture time, raw text, and current status."
        />
        <SectionCard
          title="Review"
          description="This gives us the starting point for scoring, triage, and decision workflows."
        />
      </section>

      <InboxList posts={posts} />
    </AppShell>
  );
}
