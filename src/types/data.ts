import { StaticImageData } from "next/image";

export interface ICategory {
  id: number;
  name: string;
  images: StaticImageData[];
  title: string[];
  filmId: number[];
}
