import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function ContentCreation() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Labs / Developer Experience Audits / Forthright";
  const description =
    "From technical writing to live streaming, this workshop will get you up to speed on how to create high-quality content consistently.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Developer Experience Audits</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>What You'll Learn</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Content Channels</h3>
            <p>
              You'll learn what content channels developers are using today, how
              your team can reach them effectively, and how to choose the right
              channel for your content.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Content Scoping</h3>
            <p>
              Learn how to make sure every piece of content your team creates is
              consistent, has a clear goal and call-to-action, and has just the
              right level of detail.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Content Planning</h3>
            <p>
              Be more intentional. I'll teach your team how plan ahead, work
              cross-functionally to reduce duplicated effort, and how to run
              effective content campaigns.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Best Practices</h3>
            <p>
              I'll share all my tips and best practices for content creation
              across multiple mediums, such as writing, video, giving talks, and
              live streaming.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
