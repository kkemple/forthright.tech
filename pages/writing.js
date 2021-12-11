import Head from "next/head";

import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Writing() {
  const title = "Writing / Forthright";
  const description =
    "Thoughts, insights, and actionables related to developer advocacy, community management, program management, and more.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Thoughts, insights, actionables</h1>
        <p className={styles.slogan}>
          Thoughts, insights, and actionables related to developer advocacy,
          community management, program management, and more.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
