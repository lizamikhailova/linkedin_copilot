import styles from "./AppShell.module.scss";

export function AppShell({ children }: { children: React.ReactNode }) {
  return <main className={styles.shell}>{children}</main>;
}
