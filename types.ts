export interface IProduct {
  id: number;
  base_cost: number;
  original_cost: number;
  image: string;
  name: string;
  base_qty: string;
  category_name?: string;
  description: string;
}
export interface IProducutWithCategory {
  category_id: number;
  category_name: string;
  product: IProduct;
}
export interface INotFound {
  message: string;
}
export interface ProductResponse {
  product: IProduct;
}
export interface INotFound {
  message: string;
}
export type ICategory = ITopCategories;
export interface ITopCategories {
  id: number;
  name: string;
  image: string;
  product_count: number;
}
export interface ITopProducts {
  category_id: number;
  category_name: string;
  product_count: number;
  products: IProduct[];
}
export interface IAllProducts extends ITopProducts {}

export interface ICartProduct extends IProduct {
  count: number;
}
