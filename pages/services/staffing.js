import Head from "next/head";

import pStyles from "@styles/page.module.css";
import spStyles from "@styles/services-page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Staffing() {
  const styles = {
    ...pStyles,
    ...spStyles,
  };
  const title = "Services / Staffing / Forthright";
  const description =
    "Sometimes the unexpected happens. No matter what your situation is, I can jump in and help keep things running smoothly while you work to fill the role. I can also help with sourcing incredible talent.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Staffing</h1>
        <p className={styles.slogan}>{description}</p>
      </div>
      <SectionDivider />
      <div className={styles.service}>
        <h2 className={styles.howItWorksTitle}>How It Works</h2>
        <div className={styles.howItWorks}>
          <div className={styles.step}>
            <h3>Fill-ins</h3>
            <p>
              I can jump into any role you need and start producing value
              quickly. Whether you need someone to keep things operating
              smoothly, or you want to reshape how the role is done, I can help.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Assessments</h3>
            <p>
              Having trouble filling a role? I can evaluate the role and help
              you fine-tune your job description, responsibilities, and
              requirements so you can reach the right candidates.
            </p>
          </div>
          <div className={styles.step}>
            <h3>Sourcing</h3>
            <p>
              Tap into my extensive network. I can help you find top talent in
              developer experience, program management, engineering, product
              management, and more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
