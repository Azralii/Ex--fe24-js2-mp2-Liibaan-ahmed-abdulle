import { Product } from "../models/Product";

export const filterByCategory = (products: Product[], category: string): Product[] => {
    return products.filter(product => product.getCategory().toLowerCase() === category.toLowerCase());
  };
  

export const filterByMaxPrice = (products: Product[], maxPrice: number): Product[] => {
  return products.filter(product => product.getDiscountedPrice() <= maxPrice);
};

