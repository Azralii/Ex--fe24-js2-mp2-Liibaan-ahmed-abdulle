import { ProductType } from "./types";

export class Product {
    private title: string;
    private price: number;
    private discountPercentage: number;
    private stock: number;
    private rating: number;
    private category: string;
    private thumbnail: string;
  
    constructor(productData: ProductType) {
      this.title = productData.title;
      this.price = productData.price;
      this.discountPercentage = productData.discountPercentage;
      this.stock = productData.stock;
      this.rating = productData.rating;
      this.category = productData.category;
      this.thumbnail = productData.thumbnail;
    }
  
    getDiscountedPrice(): number {
      return Math.round((this.price * (1 - this.discountPercentage / 100)) * 100) / 100;
    }
  
    updateStock(): void {
      if (this.stock > 0) this.stock--;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    getThumbnailURL(): string {
      return this.thumbnail;
    }
  
    getStock(): number {
      return this.stock;
    }
  
    getRating(): number {
      return this.rating;
    }
  
    // Lägg till getCategory-metod
    getCategory(): string {
      return this.category;
    }
  }
  