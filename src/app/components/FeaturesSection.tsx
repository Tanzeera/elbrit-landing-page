import { JSX } from 'react';
import styles from '../styles/FeaturesSection.module.css';

interface Feature {
  title: string;
  description: string;
  image: string; // Add image property
}

const features: Feature[] = [
  { title: "Clinically Studied", description: "Backed by science.", image: "/images/image1.png" },
  { title: "Vegetarian Friendly", description: "Suitable for all diets.", image: "/images/image2.png" },
  { title: "Made in India", description: "Proudly Indian.", image: "/images/image3.png" },
  { title: "Free Shipping", description: "No additional costs.", image: "/images/image4.png" },
  { title: "No Risk", description: "Money-back guarantee.", image: "/images/image5.png" },
  { title: "GMO Free", description: "All-natural ingredients.", image: "/images/image6.png" },
];

export default function FeaturesSection(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.iconBox}>
              <img src={feature.image} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
