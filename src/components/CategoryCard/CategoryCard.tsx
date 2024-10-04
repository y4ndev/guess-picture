"use client";
import { ICategory } from "@/types/data";
import React from "react";
import { useState } from "react";
import styles from "./CategoryCard.module.scss";

interface ICategoryId {
  onCategoryChange: (category: { id: number; name: string }) => void;
  catItems: ICategory[];
}

const CategoryCard: React.FC<ICategoryId> = ({ onCategoryChange, catItems }) => {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  const handleClick = (categoryId: number, categoryName: string) => {
    setActiveCategory(categoryId);
    onCategoryChange({ id: categoryId, name: categoryName });
  };

  return (
    <div className={styles.categorys}>
      <ul className={styles.items}>
        {catItems.map((category) => (
          <li
            className={`${styles.item} ${activeCategory === category.id ? styles.active : ""}`}
            key={category.id}
            onClick={() => handleClick(category.id, category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CategoryCard };
