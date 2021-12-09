import styles from "@styles/page.module.css";
import SectionDivider from "@components/SectionDivider";

export default function RunningOnlineCommunities() {
  return (
    <>
      <div className={styles.service}>
        <h1>Running Online Communities</h1>
        <p className={styles.slogan}>
          Learn everything you need to know about running a healthy and safe
          online community: moderation, bots, measuring engagement, and more.
        </p>
      </div>
      <SectionDivider />
    </>
  );
}
