import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Content() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };

  const title = "Services / Content / Forthright";
  const description =
    "You have a lot of different content needs, but you want a cohesive strategy. I'll help you figure out what to produce, what content channels you should focus on, and how to measure impact and distribution.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Content</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>How It Works</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Aggregate</h3>
            <p>
              You can't track what you don't record. First we'll set up a
              content database so you can track, measure, and share all the
              content created at your company and by your community.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Strategize</h3>
            <p>
              Time to make a plan. You'll get content campaign designs targeted
              at your audience. Campaign designs include what content to
              produce, what content channels you should target, and what
              audiences to focus on first.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Produce</h3>
            <p>
              You'll recieve a content creation guide tailored to your needs.
              The guide includes best practices for content creation across
              mediums like writing, video, and live streaming and templates for
              making sure your content is always consistent.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
