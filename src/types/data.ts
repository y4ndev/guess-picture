import { StaticImageData } from "next/image";

export interface ICategory {
  id: number;
  name: string;
  images: StaticImageData[];
  filmId: number[];
}
