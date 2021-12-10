import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function DeveloperAdvocacy() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Training / Developer Advocacy / Forthright";
  const description =
    "Learn how to maximize your impact as a developer advocate with this four week immersive program where you'll learn everything about the developer advocate role and how to be successful in it.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Developer Advocacy</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>What You'll Learn</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Your Value</h3>
            <p>
              Understand the value of developer advocacy and how to build
              strategies around the three key questions of the Developer
              Advocacy Vaue Cycle.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Content Creation</h3>
            <p>
              From technical writing to live streaming, this program will get
              you up to speed on how to create high-quality content
              consistently.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Metrics</h3>
            <p>
              Learn the ins and outs of metrics, what you should measure based
              on your goals, and how to gain trust in your metrics.
            </p>
          </div>
          <div className={styles.step}>
            <h3>DX Audits</h3>
            <p>
              Discover friction with developer experience audits. Learn how to
              discover, confirm, and address developer pain points.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
