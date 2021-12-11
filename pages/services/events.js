import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Events() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Services / Events / Forthright";
  const description =
    "Developers expect a lot from conferences and events. From infrastructure to content themes, I'll help you plan and execute your next event.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Events</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>How It Works</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Plan</h3>
            <p>
              Set your goals. I'll help you figure out what you want to get out
              of your event, how you should run it, how to get sign ups, and how
              to message to the right audience.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Launch</h3>
            <p>
              I'll provide you with an event playbook that will make sure you're
              ready for event day(s). The playbook includes best practices for
              moderation, outreach, marketing, tracking engagement, and more.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Execute</h3>
            <p>
              Get hands-on support leading up to and during your event. I'll be
              available to help you quickly resolve any issues you experience
              day of.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
