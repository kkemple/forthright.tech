import SectionDivider from "./SectionDivider";
import styles from "@styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <SectionDivider />
      <footer className={styles.footer}>
        <ul className={styles.links}>
          <li>
            <a href="mailto:inquiry@forthright.tech">Contact</a>
          </li>
          <li>
            <a href="https://twitter.com/forthright_tech">Twitter</a>
          </li>
          <li>
            <a href="https://polywork.com/theworstdev">Polywork</a>
          </li>
        </ul>
        <p>Copyright {new Date().getFullYear()} © Kurtis Kemple.</p>
      </footer>
    </div>
  );
}
