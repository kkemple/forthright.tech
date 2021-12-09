import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function DevRelManagement() {
  return (
    <>
      <div className={styles.service}>
        <h1>DevRel Management</h1>
        <p className={styles.slogan}>
          Learn what it takes to run a successful developer relations team. This
          four week immersive course will prepare you for your next (or current)
          management position.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
