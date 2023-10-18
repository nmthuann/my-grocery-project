import { Category } from "@/types/category.interface";


const URL=`${process.env.SERVER_URL}/category`;

const getCategory = async (category_id: string): Promise<Category> => {
    const convert = parseInt(category_id, 10);
  const res = await fetch(`${URL}/${convert}`);

  return res.json();
};

export default getCategory;