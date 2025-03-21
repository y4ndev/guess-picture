import { useParams } from "next/navigation";
import { useCategoryStore } from "@/store/categoryStore";

export const useCategory = () => {
  const { categories } = useCategoryStore();
  const { id } = useParams();

  const categoryId = parseInt(id as string, 10);
  return (
    categories.find((cat) => cat.id === categoryId) || {
      id: 0,
      name: "404",
      images: [],
      title: [],
      filmId: [],
    }
  );
};
