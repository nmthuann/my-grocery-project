import { Product } from "@/types/product.interface";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/product/get-products`;

interface Query{
    category_id?: number;
    color?: string;
    ram?: number;
    memory?: string; 
    status?: boolean;
}

export async function getProducts(query: Query): Promise<Product []> {

    const url = qs.stringifyUrl({
    url: URL,
    query: { 
      category_id: query.category_id,
      color: query.color,
      ram: query.ram,
      memory: query.memory,
      status: query.status,
    },})



    const res = await fetch(URL);

 
    return res.json();
}

