import { JSX } from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img src="/images/logo.png" alt="EBRIT Logo" className={styles.logo} />
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <img src="/images/footer1.png" alt="Phone Icon" className={styles.icon} />
            <p>Phone: +91 123 456 7890</p>
          </div>
          <div className={styles.contactItem}>
            <img src="/images/footer2.png" alt="Email Icon" className={styles.icon} />
            <p>Email: info@elbrit.org</p>
          </div>
          <div className={styles.contactItem}>
            <img src="/images/footer3.png" alt="Location Icon" className={styles.icon} />
            <p>Location: Pune, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}