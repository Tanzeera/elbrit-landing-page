import { JSX } from 'react';
import styles from '../styles/Header.module.css';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="EBRIT Logo" />
      </div>
    </header>
  );
}
