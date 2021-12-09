import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Documentation() {
  return (
    <>
      <div className={styles.service}>
        <h1>Documentation</h1>
        <p className={styles.slogan}>
          Quality documentation can often be the differentiator for developer
          adoption. I can help you identify and address information gaps and
          inconsistencies in tutorials and guides, as well as information
          architecture issues.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
