import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function ProgramManagementAutomation() {
  return (
    <>
      <div className={styles.service}>
        <h1>Program Management & Automation</h1>
        <p className={styles.slogan}>
          Launching is the easy part. In this workshop, you'll learn how to
          manage and scale your initiatives without sacrificing your time.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
