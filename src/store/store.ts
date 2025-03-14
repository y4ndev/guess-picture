import { create } from "zustand";
import { cartoons } from "@/utils/imageCartoons";
import { films } from "@/utils/imageFilms";
import { series } from "@/utils/imageSeries";
import { ICategory } from "@/types/data";

interface ICategoryState {
  categories: ICategory[];
  activeCategory: number;
  selectedCategory: ICategory;
  setActiveCategory: (categoryId: number) => void;
  setSelectedCategory: (category: ICategory) => void;
}

export const useCategoryStore = create<ICategoryState>((set) => {
  const initialCategories = [
    {
      id: 1,
      name: "Films",
      images: films.map((film) => film.image),
      filmId: films.map((film) => film.id),
      title: films.map((film) => film.title),
    },
    {
      id: 2,
      name: "Series",
      images: series.map((serie) => serie.image),
      filmId: series.map((serie) => serie.id),
      title: series.map((serie) => serie.title),
    },
    {
      id: 3,
      name: "Cartoons",
      images: cartoons.map((cartoon) => cartoon.image),
      filmId: cartoons.map((cartoon) => cartoon.id),
      title: cartoons.map((cartoon) => cartoon.title),
    },
  ];

  return {
    categories: initialCategories,
    selectedCategory: initialCategories[0],
    activeCategory: 1,
    setSelectedCategory: (category) => set({ selectedCategory: category }),
    setActiveCategory: (categoryId) => set({ activeCategory: categoryId }),
  };
});
