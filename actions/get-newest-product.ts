import { Product } from "@/types/product.interface";


const URL=`${process.env.NEXT_PUBLIC_API_URL}/product/get-newest-products`;

const getNewestProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${URL}`,   {
    next: { revalidate: 0 },
  });
  return await res.json();
};

export default getNewestProducts;