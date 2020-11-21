import { createContext, useContext } from "react";
import { IProduct } from "../types";

interface IGlobalContext {
  cart: IProduct[];
  orders: string[];
  removeFromCart: (product: IProduct) => void;
  addToCart: (product: IProduct) => void;
}
export const AppContext = createContext<IGlobalContext>({
  cart: [],
  orders: [],
  removeFromCart: () => {},
  addToCart: () => {},
});
export const useApp = () => useContext(AppContext);
