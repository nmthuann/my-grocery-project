import { Product } from "@/types/product.interface";


const URL=`${process.env.NEXT_PUBLIC_API_URL}/product`;

const getProduct = async (product_id: string): Promise<Product> => {
    const convert = parseInt(product_id, 10);
    console.log(`${URL}/${convert}`)
  const res = await fetch(`${URL}/${convert}`);
  return await res.json();
};

export default getProduct;