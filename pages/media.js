import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Media() {
  return (
    <>
      <div className={styles.service}>
        <h1>Podcasts, articles, ephemera</h1>
        <p className={styles.slogan}></p>
      </div>
      <SectionDivider />
    </>
  );
}
