import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Strategy() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Services / Strategy / Forthright";
  const description =
    "Whether you're starting on your developer experience journey, or looking for some organizational redesign, I'll help you figure out precisely who you'll need and what they'll need to succeed.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Strategy</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>How It Works</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Discover</h3>
            <p>
              I'll gather all the context needed to understand how developers
              are using your platform and what your business goals are. Then
              I'll identify where your most significant developer experience
              gaps are.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Plan</h3>
            <p>
              Based on discovery, I'll work with you to develop a plan for
              building out or refreshing your developer experience team,
              including short-term and long-term team strategy, defining roles
              and responsibilites, and more.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Execute</h3>
            <p>
              You'll recieve a developer experience playbook custom tailored to
              your needs full of tips, best practices, and programs you can put
              to use immediately. You can also add on any of my other services
              at a discounted rate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
