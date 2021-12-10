import Head from "next/head";

import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Media() {
  const title = "Media / Forthright";
  const description =
    "Talks, interviews, panels, podcasts, and other appearances from, Kurt Kemple, the founder of Forthright.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
      </Head>
      <div className={styles.service}>
        <h1>Talks, podcasts, panels</h1>
        <p className={styles.slogan}>
          Talks, interviews, panels, podcasts, and other appearances from, Kurt
          Kemple, the founder of Forthright.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
