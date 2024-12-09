"use client";
import { ICategory } from "@/types/data";
import React from "react";
import { useState } from "react";
import styles from "./CategoryCard.module.scss";
import { useCategoryStore } from "@/store/store";

interface ICategoryId {
  onCategoryChange: (categoryId: number) => void;
}

const CategoryCard: React.FC<ICategoryId> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  const { categories } = useCategoryStore();

  const handleClick = (categoryId: number) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className={styles.categorys}>
      <ul className={styles.items}>
        {categories.map((category) => (
          <li
            className={`${styles.item} ${activeCategory === category.id ? styles.active : ""}`}
            key={category.id}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CategoryCard };
