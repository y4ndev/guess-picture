"use client";
import { useParams } from "next/navigation";
import { ICategory } from "@/types/data";

interface ICategoryImages extends ICategory {
  images: string[];
}

// Массив категорий с текстовыми заглушками вместо картинок
const categories: ICategoryImages[] = [
  { id: 1, name: "Films", images: ["Image 1", "Image 2"] },
  { id: 2, name: "Series", images: ["Image 1", "Image 2"] },
  { id: 3, name: "Cartoons", images: ["Image 1", "Image 2"] },
  { id: 4, name: "Games", images: ["Image 1", "Image 2"] },
];

const CategoryPage = () => {
  const { id } = useParams(); // Получаем ID категории из маршрута

  // Преобразуем id в число и находим соответствующую категорию
  const categoryId = parseInt(id as string, 10);
  const category = categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return <div>Категория не найдена</div>; // Если категория не найдена, выводим сообщение
  }

  return (
    <div>
      <h1>Категория: {category.name}</h1>

      <div>
        <h2>Элементы категории:</h2>
        <div>
          {category.images.map((imageText, index) => (
            <p key={index}>{imageText}</p> // Текстовые заглушки вместо картинок
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
