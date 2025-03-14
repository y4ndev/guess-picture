"use client";
import { useParams } from "next/navigation";
import { use, useState } from "react";
import { GamePictures } from "@/components/GamePictures/GamePictures";
import { useCategoryStore } from "@/store/store";
import { PlayingField } from "@/components/PlayingField/PlayingField";
import { Score } from "@/components/Score/Score";

const CategoryPage = () => {
  const { categories } = useCategoryStore();
  const { id } = useParams(); // Получаем ID категории из маршрута

  // Преобразуем id в число и находим соответствующую категорию
  const categoryId = parseInt(id as string, 10);
  const category = categories.find((cat) => cat.id === categoryId) || {
    id: 0,
    name: "404",
    images: [],
    title: [],
    filmId: [],
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [currentScore, setCurrentScore] = useState(0);

  const handleNext = () => {
    if (!userAnswer.trim()) return; // Если поле пустое, выходим

    const correctAnswer = category.title[currentImage]?.toLowerCase();
    const userInput = userAnswer.trim().toLowerCase();

    if (correctAnswer === userInput) setCurrentScore((prev) => prev + 1);

    setCurrentImage((prev) =>
      prev < category.images.length - 1 ? prev + 1 : category.images.length
    );
    setUserAnswer(""); // Очищаем поле ввода
  };

  if (!category) {
    return <div>Категория не найдена</div>; // Если категория не найдена, выводим сообщение
  }

  return (
    <div>
      <h1>Категория: {category.name}</h1>

      <div>
        <h2>Элементы категории:</h2>
        <PlayingField />

        {currentImage < category.images.length ? (
          <GamePictures src={category.images[currentImage]} />
        ) : (
          <Score currentScore={currentScore} />
        )}

        {currentImage < category.images.length && (
          <>
            <input value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} type="text" />
            <button onClick={handleNext} disabled={userAnswer.length === 0}>
              КНОПОЧКА
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
