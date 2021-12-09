import styles from "@styles/services.module.css";

export default function Content() {
  return (
    <div className={styles.service}>
      <h1>Content</h1>
      <p className={styles.slogan}>
        You have a lot of different content needs, but you want a cohesive
        strategy. I'll help you figure out what to produce, what content
        channels you should focus on, and how to measure impact and
        distribution.
      </p>
    </div>
  );
}
