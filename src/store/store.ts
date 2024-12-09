import { create } from "zustand";
import { cartoons } from "@/utils/imageCartoons";
import { films } from "@/utils/imageFilms";
import { series } from "@/utils/imageSeries";
import { StaticImageData } from "next/image";

interface ICategory {
  id: number;
  name: string;
  images: StaticImageData[];
  filmId: number[];
}

interface ICategoryState {
  categories: ICategory[];
  selectedCategory: ICategory;
  setCategories: (categories: ICategory[]) => void;
  setSelectedCategory: (category: ICategory) => void;
}

export const useCategoryStore = create<ICategoryState>((set) => {
  const initialCategories = [
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

  return {
    categories: initialCategories,
    selectedCategory: initialCategories[0],
    setCategories: (categories) => set({ categories }),
    setSelectedCategory: (category) => set({ selectedCategory: category }),
  };
});
