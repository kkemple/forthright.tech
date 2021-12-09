import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Audits() {
  return (
    <>
      <div className={styles.service}>
        <h1>Audits</h1>
        <p className={styles.slogan}>
          Discover friction with developer experience audits. I'll work through
          your core developer workflows and provide detailed reports with
          actionable steps to improve time-to-value for developers.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
