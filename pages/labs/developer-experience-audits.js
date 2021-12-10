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
            <h3>What They Are</h3>
            <p>
              As a company grows, it becomes increasingly difficult to address
              product friction. DX Audits is a framework that helps make
              providing feedback repeatable, teachable, and reportable.
            </p>
          </div>
          <div className={styles.step}>
            <h3>When To Use Them</h3>
            <p>
              The goal of a DX audit is to document, report, and address product
              friction by having a developer advocate experience a given
              developer workflow, document and report their findings, and
              surface actionable steps to take to reduce friction.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Gaining Adoption</h3>
            <p>
              DX audits can be a vital tool in improving developer experience,
              but if other teams aren't on board they lose a lot of their value.
              Learn how to get other teams excited about dx audits and integrate
              them into their workflows.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
