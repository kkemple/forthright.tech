import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Research() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Services / Research / Forthright";
  const description =
    "Understand how developers are using your tools and services. I'll help you discover the most active developer personas in your ecosystem and what they need from you.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Research</h1>
        <p className={styles.slogan}>{description}</p>
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
              platform and figure out what personas you should be focusing on.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Identify</h3>
            <p>
              With personas in hand, I'll immerse myself in your community and
              identify the most significant needs and pain points for your
              acvite developer personas.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Report</h3>
            <p>
              You'll recieve a detailed report containing a breakdown of active
              personas compared against your current business goals and what
              each persona is currently looking for and/or struggling with in
              your ecosystem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
