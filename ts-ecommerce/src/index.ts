import { getAllProducts } from "./api";
import { renderProducts } from "./ui/gui";
import { filterByCategory, filterByMaxPrice } from "./utils/filtering";
import { SortBy, getSortedProducts } from "./utils/sorting";
import { Product } from "./modules/Product";

const sortSelect = document.querySelector("#sortSelect") as HTMLSelectElement | null;
const filterForm = document.querySelector("#filterForm") as HTMLFormElement | null;

if (!sortSelect || !filterForm) {
    throw new Error("Viktiga DOM-element kunde inte hittas!");
}

let products: Product[] = [];
let filteredProducts: Product[] = [];

/** Laddar och renderar produkter **/
const loadProducts = async () => {
    try {
        products = await getAllProducts();
        filteredProducts = products; // Initialt visas alla produkter
        renderProducts(products);
    } catch (error) {
        console.error("Fel vid hämtning av produkter:", error);
    }
};

loadProducts();

/** Filtrering **/
filterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const category = (filterForm.querySelector("select") as HTMLSelectElement).value.toLowerCase();
    const maxPriceInput = filterForm.querySelector("input") as HTMLInputElement;
    const maxPrice = maxPriceInput.value ? parseFloat(maxPriceInput.value) : NaN;

    filteredProducts = category ? filterByCategory(products, category) : products;

    if (!isNaN(maxPrice)) {
        filteredProducts = filterByMaxPrice(filteredProducts, maxPrice);
    }

    // Sortera efter den aktuella sorteringen
    filteredProducts = getSortedProducts(filteredProducts, sortSelect.value as SortBy);

    renderProducts(filteredProducts);
});

/** Sortering - NU PÅ RÄTT PLATS ✅ **/
sortSelect.addEventListener("change", () => {
    console.log("Sorteringsval ändrat till:", sortSelect.value);
    
    // Sortera direkt på senaste filtrerade listan
    filteredProducts = getSortedProducts(filteredProducts, sortSelect.value as SortBy);
    
    renderProducts(filteredProducts);
});
