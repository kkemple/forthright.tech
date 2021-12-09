import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Programs() {
  return (
    <>
      <div className={styles.service}>
        <h1>Programs</h1>
        <p className={styles.slogan}>
          Motivate and reward your developer community with a champion,
          ambassador, or MVP program.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
