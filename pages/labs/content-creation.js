import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function ContentCreation() {
  return (
    <>
      <div className={styles.service}>
        <h1>Content Creation</h1>
        <p className={styles.slogan}>
          From technical writing to live streaming, this workshop will get you
          up to speed on how to create high-quality content consistently.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
