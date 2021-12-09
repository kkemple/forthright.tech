import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "next-dark-mode";

import styles from "@styles/header.module.css";
import Logo from "@components/Logo";
import DarkModeToggle from "@components/DarkModeToggle";

export default function Header() {
  const [showMenu, toggleMenu] = useState(false);
  const { darkModeActive } = useDarkMode();

  const toggle = () => {
    toggleMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoAndNav}>
        <h1 className={styles.logo}>
          <Link href="/">
            <a className={styles.logoLink} title="Forthright">
              <Logo darkModeActive={darkModeActive} />
            </a>
          </Link>
        </h1>
        <nav className={styles.navContainer}>
          <ul className={styles.nav}>
            <li onClick={toggle}>
              <Link href="/writing">Writing</Link>
            </li>
            <li onClick={toggle}>
              <Link href="/media">Media</Link>
            </li>
            <li onClick={toggle}>
              <Link href="/#about">About</Link>
            </li>
            <li onClick={toggle}>
              <Link href="https://achievements.theworst.dev">Work</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.toggle}>
        <DarkModeToggle />
      </div>
    </header>
  );
}
