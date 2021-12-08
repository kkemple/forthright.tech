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
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Content</h3>
              <p className={styles.service}>
                No matter your content needs, I can help you figure out where to
                focus your efforts and how to measure success.
              </p>
              <Link href="/services/content">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Community</h3>
              <p className={styles.service}>
                Developers want want community, not tradional marketing. I'll
                help you plan and execute your go-to-community strategy.
              </p>
              <Link href="/services/community">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Events</h3>
              <p className={styles.service}>
                Developers expect a lot from conferences and events. From event
                infrastructure to content themeing, I'll help you plan and
                execute your next event.
              </p>
              <Link href="/services/events">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Champions Program</h3>
              <p className={styles.service}>
                Motivate and reward your developer community with a champion,
                ambassador, or MVP program.
              </p>
              <Link href="/services/champions-program">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Developer Experience Audits</h3>
              <p className={styles.service}>
                Discover friction in developer workflows. I'll work with you to
                discover your core developer workflows and provide a detailed
                audit with actionable steps to improve time-to-value for
                developers.
              </p>
              <Link href="/services/developer-experience-audits">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Developer Research</h3>
              <p className={styles.service}>
                Knowing who the developers are in your ecosystem helps you build
                the right things. I help you understand the developer personas
                in your ecosystem and what they need.
              </p>
              <Link href="/services/developer-research">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Emergency Staffing</h3>
              <p className={styles.service}>
                Sometimes the unexpected happens, sometimes you're struggling to
                fill a role. No matter what your situation is, I can jump in,
                providing immediate value and help keep things running smoothly
                while you work to fill the role.
              </p>
              <Link
                className={styles.serviceLink}
                href="/services/emergency-staffing"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
      <div className={styles.section}>
        <h2>Level Up with Labs</h2>
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
