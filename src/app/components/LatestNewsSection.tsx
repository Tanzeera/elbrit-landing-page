import { JSX } from 'react';
import styles from '../styles/LatestNewsSection.module.css';

interface NewsItem {
  date: string;
  title: string;
  image: string;
}

const news: NewsItem[] = [
  { date: "Jan 10, 2025", title: "New Product Launch", image: "images/blog1.png" },
  { date: "Jan 5, 2025", title: "Health Benefits of Turmeric", image: "images/blog2.png" },
  { date: "Dec 30, 2024", title: "Best Vitamins for Winter", image: "images/blog3.png" },
];

export default function LatestNewsSection(): JSX.Element {
  return (
    <section className={styles.news}>
      <h2>Latest News</h2>
      <div className={styles.grid}>
        {news.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.title} />
            <div className={styles.overlayBackground}></div>
            <div className={styles.infoOverlay}>
              <p>{item.date}</p>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
