"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { GamePictures } from "@/components/GamePictures/GamePictures";
import { useCategoryStore } from "@/store/store";
import { PlayingField } from "@/components/PlayingField/PlayingField";

const CategoryPage = () => {
  const { categories } = useCategoryStore();
  const { id } = useParams(); // Получаем ID категории из маршрута

  // Преобразуем id в число и находим соответствующую категорию
  const categoryId = parseInt(id as string, 10);
  const category = categories.find((cat) => cat.id === categoryId) || {
    id: 0,
    name: "404",
    images: [],
    filmId: [],
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const handleNext = () => {
    if (currentImage < category.images.length - 1 && userAnswer.length > 0) {
      setCurrentImage((prevImage) => prevImage + 1);
      console.log(category.filmId[currentImage - 1], currentImage);
    }
    setUserAnswer("");
  };

  if (!category) {
    return <div>Категория не найдена</div>; // Если категория не найдена, выводим сообщение
  }

  return (
    <div>
      <h1>Категория: {category.name}</h1>

      <div>
        <h2>Элементы категории:</h2>
        <PlayingField category={category} />
        <div>{<GamePictures src={category.images[currentImage]} />}</div>
        <input value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} type="text" />
        <button onClick={() => handleNext()}>КНОПОЧКА</button>
      </div>
    </div>
  );
};

export default CategoryPage;
