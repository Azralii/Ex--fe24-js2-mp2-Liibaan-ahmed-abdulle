import { Product } from "../modules/Product"; // Se till att sökvägen är korrekt

// 🔹 Filtrera produkter baserat på kategori
export const filterByCategory = (products: Product[], category: string): Product[] => {
    const categoryMapping: Record<string, string[]> = {
        electronics: ["laptops", "mobile-accessories"], // Lägg till fler om det behövs
        beauty: ["beauty"],
        "mens-shoes": ["mens-shoes"]
    };

    const validCategories = categoryMapping[category] || [category]; // Om kategorin finns i mappen, använd den

    return products.filter(product => validCategories.includes(product.getCategory().toLowerCase()));
};


// 🔹 Filtrera produkter baserat på maxpris
export const filterByMaxPrice = (products: Product[], maxPrice: number): Product[] => {
    return products.filter(product => product.getDiscountedPrice() <= maxPrice);
};


