import { createContext, useContext } from "react";
import { ICartProduct, IProduct } from "../types";

interface IGlobalContext {
  cart: ICartProduct[];
  orders: ICartProduct[];
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
  addToCart: (product: IProduct) => void;
  setOrders: (orders: ICartProduct[]) => void;
}
export const AppContext = createContext<IGlobalContext>({
  cart: [],
  orders: [],
  removeFromCart: (product: IProduct) => {},
  clearCart: () => {},
  addToCart: (product: IProduct) => {},
  setOrders: (orders: ICartProduct[]) => {},
});
export const useApp = () => useContext(AppContext);
