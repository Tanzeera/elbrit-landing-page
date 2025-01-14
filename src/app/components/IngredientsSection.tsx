import { JSX } from 'react';
import styles from '../styles/IngredientsSection.module.css';

interface Ingredient {
  name: string;
  description: string;
  image: string;
}

const ingredients: Ingredient[] = [
  { name: "Vitamin C", description: "Boost immunity.", image: "/images/vitaminc.png" },
  { name: "Vitamin B3", description: "Good for skin.", image: "/images/vitaminb3.png" },
  { name: "Magnesium", description: "Supports energy.", image: "/images/magnesium.png" },
  { name: "Hyaluronic Acid", description: "Keeps skin hydrated.", image: "/images/acid.png" },
  { name: "Lactobacillus", description: "Good for gut.", image: "/images/lacto.png" },
];

export default function IngredientsSection(): JSX.Element {
  return (
    <section className={styles.ingredients}>
      <h2>Better Ingredients</h2>
      <p>Only the best when you choose products offered on our platform. High-quality ingredients for high-quality products!</p>
      <div className={styles.grid}>
        {ingredients.map((ingredient, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={ingredient.image} alt={ingredient.name} />
              <div className={styles.infoOverlay}>
                <h3>{ingredient.name}</h3>
                <p>{ingredient.description}</p>
                <button className={styles.seeMoreButton}>See More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
