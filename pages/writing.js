import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Writing() {
  return (
    <>
      <div className={styles.service}>
        <h1>Articles on DX and DevRel</h1>
        <p className={styles.slogan}></p>
      </div>
      <SectionDivider />
    </>
  );
}
