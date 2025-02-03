import { Product } from "./models/Product";
import { ProductType } from "./models/types";

export const getAllProducts = async (): Promise<Product[]> => {
  const url = "https://dummyjson.com/products";
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    return data.products.map((p: ProductType) => new Product(p));
  } catch (error) {
    console.error(error);
    return [];
  }
};
