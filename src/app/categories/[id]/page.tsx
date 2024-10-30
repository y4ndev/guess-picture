"use client";
import { useParams } from "next/navigation";
import { ICategory } from "@/types/data";
import { cartoons } from "@/utils/imageCartoons";
import { series } from "@/utils/imageSeries";
import { films } from "@/utils/imageFilms";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { GamePictures } from "@/components/GamePictures/GamePictures";

interface ICategoryImages extends ICategory {
  images: StaticImageData[];
}

const categories: ICategoryImages[] = [
  { id: 1, name: "Films", images: films.map((film) => film.image) },
  { id: 2, name: "Series", images: series.map((serie) => serie.image) },
  { id: 3, name: "Cartoons", images: cartoons.map((cartoon) => cartoon.image) },
];

const CategoryPage = () => {
  const { id } = useParams(); // Получаем ID категории из маршрута

  // Преобразуем id в число и находим соответствующую категорию
  const categoryId = parseInt(id as string, 10);
  const category = categories.find((cat) => cat.id === categoryId);

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {};

  if (!category) {
    return <div>Категория не найдена</div>; // Если категория не найдена, выводим сообщение
  }

  return (
    <div>
      <h1>Категория: {category.name}</h1>

      <div>
        <h2>Элементы категории:</h2>
        <div>
          {category.images.map((imageSrc, index) => (
            // <Image key={index} src={imageSrc.src} alt={`Image ${index + 1}`} layout="fill" />
            <GamePictures key={index} src={imageSrc.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
