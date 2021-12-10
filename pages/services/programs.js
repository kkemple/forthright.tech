import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Programs() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Services / Programs / Forthright";
  const description =
    "Motivate and reward your developer community with a champion, ambassador, or MVP program.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Programs</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>How It Works</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Build</h3>
            <p>
              I'll help you set up the infrastructure needed to support a
              champions program, including a microsite, champions database, swag
              system, onboarding and outreach content, and more.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Launch</h3>
            <p>
              I'll help you identify a diverse group of active developers in
              your community for initial outreach and define the requirements
              for acceptance into the champions program.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Scale</h3>
            <p>
              You'll recieve a custom tailored champions program playbook with
              tips, best practices, and programs to help you scale your
              champions program beyond the first hundred members.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
