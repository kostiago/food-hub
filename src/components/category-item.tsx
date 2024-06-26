import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col gap-3 px-4 py-3">
      <Image
        src={category.imageUrl}
        alt={category.name}
        width={30}
        height={30}
      />
      <span className="text-sm font-semibold">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
