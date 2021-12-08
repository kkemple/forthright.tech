import SectionDivider from "@components/SectionDivider";
import styles from "@styles/index.module.css";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className={styles.slogan}>
        <h1>
          Helping companies, teams, and individuals create better{" "}
          <span className="gradient gradient-text">developer experiences</span>.
        </h1>
      </div>
      <SectionDivider />
      <div className={styles.section}>
        <h2>Services</h2>
        <div className={styles.services}>
          <div className={styles.category}>
            <h3>Content Strategy</h3>
            <div className={styles.service}></div>
          </div>
          <div className={styles.category}>
            <h3>Community Strategy</h3>
            <div className={styles.service}></div>
          </div>
          <div className={styles.category}>
            <h3>Event Strategy</h3>
            <div className={styles.service}></div>
          </div>
          <div className={styles.category}>
            <h3>Champions Program Strategy</h3>
            <div className={styles.service}></div>
          </div>
          <div className={styles.category}>
            <h3>Developer Experience Audits</h3>
            <div className={styles.service}></div>
          </div>
          <div className={styles.category}>
            <h3>Developer Research</h3>
            <div className={styles.service}></div>
          </div>
          <div className={styles.category}>
            <h3>Emergency Staffing</h3>
            <div className={styles.service}></div>
          </div>
        </div>
      </div>
      <SectionDivider />
      <div className={styles.section}>
        <h2>For Individuals</h2>
      </div>
      <SectionDivider />
      <div className={styles.section}>
        <h2>About Me</h2>
        <div className={styles.learnMore}>
          <img className={styles.profilePic} src="/profile-pic-squircle.png" />
          <p>
            Kurt Kemple is the creator of{" "}
            <Link href="https://theworst.dev/#guides">
              The Developer Advocate's Guide series
            </Link>
            ,{" "}
            <a href="https://theworst.dev/developer-advocates-guide-to-addressing-product-friction#dx-audits-v2">
              Developer Experience Audits
            </a>
            , and the{" "}
            <a href="https://theworst.dev/developer-advocates-guide-to-metrics-and-reporting#developer-advocacy-value-cycle">
              Developer Advocacy Value Cycle
            </a>
            . He's led developer relations and engineering teams at Apollo, AWS,
            and MLS.
            <span>
              <a href="https://achievements.theworst.dev/">See my work</a>
            </span>
          </p>
        </div>
      </div>
      <SectionDivider />
      <div className={styles.section}>
        <h2 className="gradient gradient-text">What Others Are Saying</h2>
      </div>
    </>
  );
}
