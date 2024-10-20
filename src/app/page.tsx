"use client";
import { CategoryCard } from "@/components/CategoryCard/CategoryCard";
import { ICategory } from "@/types/data";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const categories: ICategory[] = [
  { id: 1, name: "Films" },
  { id: 2, name: "Series" },
  { id: 3, name: "Cartoons" },
];

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState<ICategory>(categories[0]);

  const handleCategoryChange = (category: ICategory) => {
    setCurrentCategory(category);
  };

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <h1>Guess-picture</h1>
        <div className={styles.categorys}>
          <CategoryCard onCategoryChange={handleCategoryChange} catItems={categories} />
        </div>
        <Link href={`/categories/${currentCategory.id}`} passHref>
          <button className={styles.btn}>Start</button>
        </Link>
      </div>
    </main>
  );
}
