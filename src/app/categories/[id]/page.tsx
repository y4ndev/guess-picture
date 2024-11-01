"use client";
import { useParams } from "next/navigation";
import { ICategory } from "@/types/data";
import { cartoons } from "@/utils/imageCartoons";
import { series } from "@/utils/imageSeries";
import { films } from "@/utils/imageFilms";
import Image, { StaticImageData } from "next/image";
import { use, useState } from "react";
import { GamePictures } from "@/components/GamePictures/GamePictures";

interface ICategoryImages extends ICategory {
  images: StaticImageData[];
  filmId: number[];
}

const categories: ICategoryImages[] = [
  {
    id: 1,
    name: "Films",
    images: films.map((film) => film.image),
    filmId: films.map((film) => film.id),
  },
  {
    id: 2,
    name: "Series",
    images: series.map((serie) => serie.image),
    filmId: series.map((serie) => serie.id),
  },
  {
    id: 3,
    name: "Cartoons",
    images: cartoons.map((cartoon) => cartoon.image),
    filmId: cartoons.map((cartoon) => cartoon.id),
  },
];

const CategoryPage = () => {
  const { id } = useParams(); // Получаем ID категории из маршрута

  // Преобразуем id в число и находим соответствующую категорию
  const categoryId = parseInt(id as string, 10);
  const category = categories.find((cat) => cat.id === categoryId) || {
    id: 0,
    name: "Неизвестная категория",
    images: [],
    filmId: [],
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [userScore, setUserScore] = useState(0);

  const handleNext = () => {
    if (currentImage < category.images.length - 1 && userAnswer.length > 0) {
      setCurrentImage((prevImage) => prevImage + 1);
      console.log(category.filmId[currentImage - 1], currentImage);
    }
    setUserAnswer("");
    // if ( === ) {

    // }
  };

  if (!category) {
    return <div>Категория не найдена</div>; // Если категория не найдена, выводим сообщение
  }

  return (
    <div>
      <h1>Категория: {category.name}</h1>

      <div>
        <h2>Элементы категории:</h2>
        <div>{<GamePictures src={category.images[currentImage]} />}</div>
        <input value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} type="text" />
        <button onClick={() => handleNext()}>КНОПОЧКА</button>
      </div>
    </div>
  );
};

export default CategoryPage;
