import SectionDivider from "./SectionDivider";
import styles from "@styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright {new Date().getFullYear()} © Kurtis Kemple.</p>
    </footer>
  );
}
