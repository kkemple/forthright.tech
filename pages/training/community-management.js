import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function CommunityManagement() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Training / Community Management / Forthright";
  const description =
    "Learn everything you need to know about running a successful online community. From tracking engagement to community strategy, this four week immersive course will have you ready.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Community Management</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>What You'll Learn</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Discord</h3>
            <p>
              You'll learn everything there is to know about running a Discord
              server: moderation, permissions, bots, integrations, and more.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Strategy</h3>
            <p>
              Learn how to build your own go-to-community strategies and bring
              developers closer into your orbit with the Orbit Model.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Activities</h3>
            <p>
              Keep your community engaged and motivated with activites like
              learning cohorts, practioners roles, demo days, and mini events.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Reporting</h3>
            <p>
              Make sure you're measuring what matters. I'll help you figure out
              what engagement is important in your community and how to measure
              it.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
