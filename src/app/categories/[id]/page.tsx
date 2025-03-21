"use client";

import { useCategory } from "@/hooks/useCategory";
import { GameContent } from "@/components/GameContent/GameContent";

const CategoryPage = () => {
  const category = useCategory();
  if (!category) {
    return <div>Категория не найдена</div>; // Если категория не найдена, выводим сообщение
  }
  console.log("Rendering CategoryPage, category:", category);

  return (
    <div>
      <h1>Категория: {category.name}</h1>
      <div>
        <h2>Элементы категории:</h2>
        <GameContent />
      </div>
    </div>
  );
};

export default CategoryPage;
