export interface IProduct {
  is_hidden: boolean;
  id: number;
  base_cost: number;
  original_cost: number;
  image: string;
  name: string;
  category_name?: string;
  description: string;
}
export interface INotFound {
  message: string;
}
export interface Response {
  product: IProduct;
}
export interface IAllProducts extends IProduct {}
export interface INotFound {
  message: string;
}
export interface ICategory {
  category_id: number;
  category_name: string;
  product_count: number;
  products: IProduct[];
}
