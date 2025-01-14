import { JSX } from 'react';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection(): JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.leftContainer}>
        <h1>Essential Vitamins</h1>
        <p>Get Your Vitamins & Minerals</p>
        <button className={styles.ctaButton}>Explore</button>
      </div>

      <div className={styles.centerContainer}>
        <div className={styles.mainImageContainer}>
          <img src="/images/f2-1.png.png" alt="Product" /> {/* Updated image source */}
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.featureBox}>
          <div className={styles.feature}>
            <img src="/images/vitamin.png" alt="Vitamins" /> {/* Use SVG icons */}
            <h4>Vitamins</h4>
            <p>Essential for overall health and well-being</p>
          </div>
          <div className={styles.feature}>
            <img src="/images/weight.png" alt="Weight Loss" /> {/* Use SVG icons */}
            <h4>Weight Loss</h4>
            <p>Support your weight management goals</p>
          </div>
          <div className={styles.feature}>
            <img src="/images/foods.png" alt="Functional Foods" /> {/* Use SVG icons */}
            <h4>Functional Foods</h4>
            <p>Explore a range of beneficial options</p>
          </div>
        </div>
      </div>
    </section>
  );
}