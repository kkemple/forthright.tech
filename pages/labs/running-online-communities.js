import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function RunningOnlineCommunities() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };

  const title = "Labs / Running Online Communities / Forthright";
  const description =
    "Learn everything you need to know about running a healthy and safe online community: moderation, bots, measuring engagement, and more.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Running Online Communities</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>What You'll Learn</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Moderation</h3>
            <p>
              Keep your community safe by ensuring you have a well organized
              moderation strategy and response plan for code of conduct
              violations.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Discord</h3>
            <p>
              Learn everything you need to know about running a Discord server.
              We'll cover channel architecture, permissions, bots, Discord
              events, and more.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Activities</h3>
            <p>
              Creating an active community takes active effort. Learn how to
              keep your community engaged through community actives and events.
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
