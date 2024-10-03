import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import styles from "./page.module.css";

export default function Home() {

  
  
  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <h1>Guess-picture</h1>
        <div className={styles.categorys}>
          <CategoryCard />
        </div>
        <button className={styles.btn}>Start</button>
      </div>
    </main>
  );
}
