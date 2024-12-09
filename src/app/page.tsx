"use client";
import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import Link from "next/link";
import styles from "./page.module.css";
import { useCategoryStore } from "@/store/store";

export default function Home() {
  const { categories, selectedCategory, setSelectedCategory } = useCategoryStore();

  const handleCategoryChange = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    if (category) setSelectedCategory(category);
  };

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <h1>Guess-picture</h1>
        <div className={styles.categorys}>
          <CategoryCard onCategoryChange={handleCategoryChange}  />
        </div>
        <Link href={`/categories/${selectedCategory.id}`} passHref>
          <button className={styles.btn}>Start</button>
        </Link>
      </div>
    </main>
  );
}
