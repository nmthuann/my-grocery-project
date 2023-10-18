import { Category } from "./category.interface";
import { Discount } from "./discount.interface";
import {Image}from "./image.interface";

export interface Product {
  product_id: number;
  model_name: string;
  vote: number;
  price: number;
  unit_price: number;
  quantity: number;
  status: boolean;
  description: string;
  operation_system: string; //  operation_system <- brand
  hardware: string; // hardware <- origin
  warranty_time: number;
  images: Image[];
  category: Category;
  discount: Discount;

  // __category__: Category;
  // __discount__: Discount;

  // bổ sung
  color: string;
  battery: number;
  screen: number;
  memory: number
  front_camera: number;
  behind_camera: number;
  ram: number

}