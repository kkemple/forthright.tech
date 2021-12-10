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
        <p className={styles.slogan}>
          You have a lot of different content needs, but you want a cohesive
          strategy. I'll help you figure out what to produce, what content
          channels you should focus on, and how to measure impact and
          distribution.
        </p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>How It Works</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Build</h3>
            <p>
              First we'll set up the infrastructure you'll need to manage and
              measure your community. Then we'll set up your virtual community
              spaces and train your team(s) on all platforms and how to moderate
              each. We'll also prepare a pre-launch marketing campaign.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Launch</h3>
            <p>
              Make your launch something to remember! We'll help you plan a
              lauch event that will get the community hyped about your new
              program and provide strategy on launch day/week/month activities
              to get your community kicked off.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Scale</h3>
            <p>
              You'll recieve a detailed plan that will help you grow your
              community while continuing to foster engagement. You'll learn more
              about the tools that will help you with your community, how to
              build a team of community advocates and much more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
