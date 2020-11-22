import { useEffect, useRef, useState } from "react";
import { compileFunction } from "vm";
import { ICartProduct, IProduct } from "./types";

const serialize = JSON.stringify;
const deserialize = JSON.parse;
function clone<T>(item: T) {
  return JSON.parse(JSON.stringify(item));
}
export function useCart() {
  const [cart, setCart] = useState<ICartProduct[]>(() => {
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
    // Check the product is already in the cart
    const cloned: ICartProduct[] = clone<ICartProduct[]>(cart);
    const currentFoundProduct = cloned.find((item) => item.id === product.id);
    if (currentFoundProduct) {
      // If already there increase count
      currentFoundProduct.count += 1;
      console.log("🚀 ~ file: hooks.ts ~ line 30 ~ addToCart ~ cloned", cloned);
      setCart(cloned);
    } else {
      // Otherwise put count = 1;
      const productToBeAdded = { ...product, count: 1 };
      const updatedCart = [...cart, productToBeAdded];
      setCart(updatedCart);
    }
  };
  const removeFromCart = (product: ICartProduct) => {
    const clonedCart: ICartProduct[] = clone<ICartProduct[]>(cart);
    // Find if the product already exists
    const currentFoundItemIndex = clonedCart.findIndex(
      (item) => item.id === product.id,
    );
    if (currentFoundItemIndex !== -1) {
      // If found decrease the count
      const currentFoundItem = clonedCart[currentFoundItemIndex];
      currentFoundItem.count -= 1;
      // After decreasing If the count === 0 remove the item from cart
      if (currentFoundItem.count === 0) {
        clonedCart.splice(currentFoundItemIndex, 1);
        setCart(clonedCart);
      } else {
        setCart(clonedCart);
      }
    }
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
