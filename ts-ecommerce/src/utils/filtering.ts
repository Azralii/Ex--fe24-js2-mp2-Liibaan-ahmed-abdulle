import { Product } from "../modules/Product"; // Se till att sökvägen är korrekt

// 🔹 Filtrera produkter baserat på kategori
export const filterByCategory = (products: Product[], category: string): Product[] => {
    console.log("Vald kategori:", category);

    if (!category) return products; // Om ingen kategori är vald, returnera alla produkter

    return products.filter(product => product.getCategory().toLowerCase() === category.toLowerCase());
};

// 🔹 Filtrera produkter baserat på maxpris
export const filterByMaxPrice = (products: Product[], maxPrice: number): Product[] => {
    return products.filter(product => product.getDiscountedPrice() <= maxPrice);
};