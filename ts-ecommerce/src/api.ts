import { Product } from "./modules/Product";
import { ProductType } from "./modules/types";

export const getAllProducts = async (): Promise<Product[]> => {
    const url = "https://dummyjson.com/products?limit=100";
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch products");
  
      const data = await res.json();
  
      console.log("Alla kategorier från API:", [...new Set(data.products.map((p: ProductType) => p.category))]);
  
      return data.products.map((p: ProductType) => new Product(p));
    } catch (error) {
      console.error("Fel vid hämtning:", error);
      return [];
    }
  };
  