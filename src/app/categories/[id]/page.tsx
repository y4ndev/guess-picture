"use client";

import { useCategory } from "@/hooks/useCategory";
import { GameContent } from "@/components/GameContent/GameContent";

const CategoryPage = () => {
  const category = useCategory();
  if (!category) {
    return <div>Категория не найдена</div>; 
  }
  console.log("Rendering CategoryPage, category:", category);

  return (
    <div>
      <h1>Категория: {category.name}</h1>
      <div>
        <GameContent />
      </div>
    </div>
  );
};

export default CategoryPage;
