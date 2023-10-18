import { Category } from "@/types/category.interface";
// import axios from 'axios';

const URL=`${process.env.SERVER_URL}/category/get-categories`;


export async function getCategories(): Promise<Category []> {
//   const res = await fetch(URL,
//   {
//     next: { revalidate: 0 },
//   })


    const res = await fetch(URL);

 
    return res.json();
}

