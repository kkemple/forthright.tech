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
          <div className={styles.step}>
            <h3>Discover</h3>
            <p>
              This is the work before the work. Discovery is where I'll gather
              all the context needed to understand how developers are using your
              platform and figure out what workflows need the most attention and
              are most critical to your success.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Build</h3>
            <p>
              I'll build with your platform by going through the developer
              workflows from discovery and record my experience in friction
              logs. I'll also include short-term and long-term actions you can
              take to improve the developer experience.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Report</h3>
            <p>
              You'll recieve a detailed report covering my experience building
              with your platform and recommendations for addressing any friction
              encountered during the audit. Action items will be priortized by
              severity of the related friction and business goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
