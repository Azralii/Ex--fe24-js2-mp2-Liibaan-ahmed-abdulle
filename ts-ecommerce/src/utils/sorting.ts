// src/utils/sorting.ts

import { Product } from "../models/Product"; 

export type SortOrder = "ascending" | "descending";
export type SortBy = "rate-des" | "rate-asc" | "price-des" | "price-asc";

/**
 * Sorterar produkter baserat på pris eller betyg.
 * @param products - Array av produkter
 * @param sortBy - Sorteringskriterium
 * @returns En ny sorterad array av produkter
 */
export function getSortedProducts(products: Product[], sortBy: SortBy): Product[] {
    let sortedProducts: Product[];

    if (sortBy === "rate-des") {
        sortedProducts = [...products].sort((a, b) => b.getRating() - a.getRating());
    } else if (sortBy === "rate-asc") {
        sortedProducts = [...products].sort((a, b) => a.getRating() - b.getRating());
    } else if (sortBy === "price-des") {
        sortedProducts = [...products].sort((a, b) => b.getDiscountedPrice() - a.getDiscountedPrice());
    } else if (sortBy === "price-asc") {
        sortedProducts = [...products].sort((a, b) => a.getDiscountedPrice() - b.getDiscountedPrice());
    } else {
        sortedProducts = products;
    }

    return sortedProducts;
}
