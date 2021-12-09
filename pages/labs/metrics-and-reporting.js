import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function MetricsAndReporting() {
  return (
    <>
      <div className={styles.service}>
        <h1>Metrics & Reporting</h1>
        <p className={styles.slogan}>
          In this workshop, you'll learn everything you need to know about
          metrics and reporting for your team, as well as how to put it into
          action.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
