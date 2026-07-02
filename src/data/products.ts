import categoriesData from "./json/categories.json";
import productsData from "./json/products.json";

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  applications: string[];
  specs?: Record<string, string>;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = categoriesData as Category[];
export const products: Product[] = productsData as Product[];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getFeaturedProducts(limit = 6): Product[] {
  return products.slice(0, limit);
}
