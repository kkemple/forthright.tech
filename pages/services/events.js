import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Events() {
  return (
    <>
      <div className={styles.service}>
        <h1>Events</h1>
        <p className={styles.slogan}>
          Developers expect a lot from conferences and events. From
          infrastructure to content themes, I'll help you plan and execute your
          next event.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
