"use client";
import React from "react";
import { useState } from "react";
import styles from "./CategoryCard.module.scss";

const CategoryCard = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const catItems = [
    { name: "Films", id: 1 },
    { name: "Series", id: 2 },
    { name: "Cartoons", id: 3 },
    { name: "Games", id: 4 },
  ];

  const handleClick = (categoryId: number) => {
    setActiveCategory(categoryId); // Обновляем состояние, указывая активный элемент
  };

  return (
    <div className={styles.categorys}>
      <ul className={styles.items}>
        {catItems.map((category) => (
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
