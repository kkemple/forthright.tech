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
        <h2 id="services">Services</h2>
        <div className={styles.services}>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Strategy</h3>
              <p className={styles.service}>
                Whether you're just starting on your developer experience
                journey, or looking for some organizational redesign, I'll help
                you figure out precisely who you'll need and what they'll need
                to succeed.
              </p>
              <Link href="/services/strategy">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Content</h3>
              <p className={styles.service}>
                You have a lot of different content needs, but you want a
                cohesive strategy. I'll help you figure out what to produce,
                what content channels you should focus on, and how to measure
                impact and distribution.
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
                Developers want community, not traditional marketing. I'll help
                you plan and execute your go-to-community strategy so you can
                maximize your developer reach.
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
                Developers expect a lot from conferences and events. From
                infrastructure to content themes, I'll help you plan and execute
                your next event.
              </p>
              <Link href="/services/events">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Programs</h3>
              <p className={styles.service}>
                Motivate and reward your developer community with a champion,
                ambassador, or MVP program.
              </p>
              <Link href="/services/programs">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Audits</h3>
              <p className={styles.service}>
                Discover friction with developer experience audits. I'll work
                through your core developer workflows and provide detailed
                reports with actionable steps to improve time-to-value for
                developers.
              </p>
              <Link href="/services/audits">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Research</h3>
              <p className={styles.service}>
                Understand how developers are using your tools and services.
                I'll help you discover the most active developer personas in
                your ecosystem and what they need from you.
              </p>
              <Link href="/services/research">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Documentation</h3>
              <p className={styles.service}>
                Quality documentation can often be the differentiator for
                developer adoption. I can help you identify and address
                information gaps and inconsistencies in tutorials and guides, as
                well as information architecture issues.
              </p>
              <Link href="/services/documentation">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Staffing</h3>
              <p className={styles.service}>
                Sometimes the unexpected happens. No matter what your situation
                is, I can jump in and help keep things running smoothly while
                you work to fill the role, or I can help with sourcing
                incredible talent.
              </p>
              <Link href="/services/staffing">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
      <div className={styles.section}>
        <h2 id="labs">Level Up with Labs</h2>
        <div className={styles.services}>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Metrics & Reporting</h3>
              <p className={styles.service}>
                In this workshop, you'll learn everything you need to know about
                metrics and reporting for your team, as well as how to put it
                into action.
              </p>
              <Link href="/labs/metrics-and-reporting">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Content Creation</h3>
              <p className={styles.service}>
                From technical writing to live streaming, this workshop will get
                you up to speed on how to create high-quality content
                consistently.
              </p>
              <Link href="/labs/content-creation">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Running Online Communities</h3>
              <p className={styles.service}>
                Learn everything you need to know about running a healthy and
                safe online community: moderation, bots, measuring engagement,
                and more.
              </p>
              <Link href="/labs/running-online-communities">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Program Management & Automation</h3>
              <p className={styles.service}>
                Launching is the easy part. In this workshop, you'll learn how
                to manage and scale your initiatives without sacrificing your
                time.
              </p>
              <Link href="/labs/program-management-and-automation">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
      <div className={styles.section}>
        <h2 id="training">Individualized Training</h2>
        <div className={styles.services}>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Developer Advocacy</h3>
              <p className={styles.service}>
                Learn how to maximize your impact as a developer advocate with
                this four week immersive program where you'll learn everything
                about the developer advocate role and how to be successful in
                it.
              </p>
              <Link href="/training/developer-advocacy">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>Community Management</h3>
              <p className={styles.service}>
                Learn everything you need to know about running a successful
                online community. From tracking engagement to community
                strategy, this four week immersive course will have you ready.
              </p>
              <Link href="/training/developer-advocacy">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
          <div className={`${styles.categoryContainer} gradient`}>
            <div className={styles.category}>
              <h3>DevRel Management</h3>
              <p className={styles.service}>
                Learn what it takes to run a successful developer relations
                team. This four week immersive course will prepare you for your
                next (or current) management position.
              </p>
              <Link href="/training/developer-advocacy">
                <a className={styles.serviceLink}>Learn more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
      <div className={styles.section}>
        <h2 id="about">About Me</h2>
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
