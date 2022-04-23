/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './header.module.css';

function Header() {
  return(
    <heading className={styles.textInCenter}>
      <section className={styles.headerSection}>
        <a className={styles.headerHeading}>CSS Modules Lesson Task</a>
      </section>
      <nav>
        <a className={styles.pageLink}>Home</a>
        <a className={styles.pageLink}>About</a>
        <a className={styles.pageLink}>Contact</a>
      </nav>
    </heading>
  );
}

export default Header;