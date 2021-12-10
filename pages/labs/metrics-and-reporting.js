import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function MetricsAndReporting() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Labs / Metrics and Reporting / Forthright";
  const description =
    "In this workshop, you'll learn the ins and outs of metrics, what your team should measure based on your goals, and how to gain trust in your metrics.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Metrics & Reporting</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>What You'll Learn</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Metric Types</h3>
            <p>
              If you want to measure and report on your work successfully, you
              need to have a deep understanding of how companies think about
              metrics. Learn the different types of metrics and how they apply
              to your team.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Recording Your Work</h3>
            <p>
              Tracking the work you do is fundamental to your success. Learn how
              to turn your successes into metrics that others trust by drawing a
              clear line from your team to the impact created from your work.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Measuring Success</h3>
            <p>
              Figuring out what to measure is difficult. Discover your key
              questions, how to answer them with data, reporting traps and
              pitfalls to avoid, and how to build trust in your reporting.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
