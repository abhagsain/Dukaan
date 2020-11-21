import { useEffect, useRef, useState } from "react";
import { IProduct } from "./types";

const serialize = JSON.stringify;
const deserialize = JSON.parse;
export function useCart() {
  const [cart, setCart] = useState<IProduct[]>(() => {
    // Initialize cart with the items from local storage
    if (process.browser) {
      const valueInLocalStorage = window.localStorage.getItem("cartItems");
      if (valueInLocalStorage) {
        return deserialize(valueInLocalStorage);
      }
    }
    return [];
  });
  useEffect(() => {
    window.localStorage.setItem("cartItems", serialize(cart));
  }, [cart]);
  const addToCart = (product: IProduct) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };
  const removeFromCart = (product: IProduct) => {
    const currentFoundItems = cart.filter((item) => item.id === product.id);
    currentFoundItems.pop();
    setCart((prev) => {
      const newState: IProduct[] = [
        ...prev.filter((item) => item.id !== product.id),
        ...currentFoundItems,
      ];
      return newState;
    });
  };
  return { cart, addToCart, removeFromCart, setCart };
}
export function useLocalStorageState(
  key: string,
  defaultValue = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
