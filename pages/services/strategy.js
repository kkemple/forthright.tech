import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function Strategy() {
  return (
    <>
      <div className={styles.service}>
        <h1>Strategy</h1>
        <p className={styles.slogan}>
          Whether you're just starting on your developer experience journey, or
          looking for some organizational redesign, I'll help you figure out
          precisely who you'll need and what they'll need to succeed.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
