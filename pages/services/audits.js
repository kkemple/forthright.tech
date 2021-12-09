import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Audits() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };

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
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>How It Works</h2>
        <div className={styles.howItWorks}>
          <div className={`${styles.stepContainer} gradient`}>
            <div className={styles.step}>Discover</div>
          </div>
          <div className={`${styles.stepContainer} gradient`}>
            <div className={styles.step}>Build</div>
          </div>
          <div className={`${styles.stepContainer} gradient`}>
            <div className={styles.step}>Report</div>
          </div>
        </div>
      </div>
    </>
  );
}
