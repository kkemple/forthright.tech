import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function ProgramManagementAutomation() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };

  const title = "Labs / Program Management and Automation / Forthright";
  const description =
    "Launching is the easy part. In this workshop, you'll learn how to manage and scale your initiatives without sacrificing your time.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Program Management & Automation</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>What You'll Learn</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Process Optimization</h3>
            <p>
              Lock down your processes and reclaim your time. Learn how to use
              tools like Airtable to organize, track, and report on your
              programs and initiatives so you can keep them running smoothly
              without a significant time investment.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Automation</h3>
            <p>
              Leverage the power of low/no-code so you can automate away the
              glue work for your programs and initiatives. Learn about
              automation tools like Zapier, Pipedream, and GitHub Actions and
              how to put them into action with workflows like event
              registration, tracking community engagement, and more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
