import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Documentation() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Services / Documentation / Forthright";
  const description =
    "Quality documentation can often be the differentiator for developer adoption. I can help you identify and address information gaps and inconsistencies in tutorials and guides, as well as information architecture issues.";

  return (
    <>
      <div className={styles.service}>
        <h1>Documentation</h1>
        <p className={styles.slogan}>
          Quality documentation can often be the differentiator for developer
          adoption. I can help you identify and address information gaps and
          inconsistencies in tutorials and guides, as well as information
          architecture issues.
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
              platform and figure out what documentation needs the most
              attention and are most critical to your success.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Report</h3>
            <p>
              I'll build with your platform by going through the docs from
              discovery and record my experience. You'll recieve a detailed
              report covering my experience building with your platform and
              recommendations for addressing any issues encountered during the
              assessment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
