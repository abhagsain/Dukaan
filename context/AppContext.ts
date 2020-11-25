import { createContext, useContext } from "react";
import { ICartProduct, IProduct } from "../types";

interface IGlobalContext {
  cart: ICartProduct[];
  orders: string[];
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
  addToCart: (product: IProduct) => void;
}
export const AppContext = createContext<IGlobalContext>({
  cart: [],
  orders: [],
  removeFromCart: () => {},
  clearCart: () => {},
  addToCart: () => {},
});
export const useApp = () => useContext(AppContext);
