import { useEffect, useRef, useState } from "react";
import { compileFunction } from "vm";
import { ICartProduct, IProduct } from "./types";

const serialize = JSON.stringify;
const deserialize = JSON.parse;
function clone<T>(item: T) {
  return JSON.parse(JSON.stringify(item));
}
function getValueFromLocalStorage(key: string) {
  if (process.browser) {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
  }
  return undefined;
}
type IOrders = ICartProduct;
export function useOrders() {
  const [orders, setOrders] = useState<IOrders[]>(
    () => getValueFromLocalStorage("orders") || [],
  );
  function updateOrders(orders: IOrders[]) {
    setOrders(orders);
  }
  useEffect(() => {
    window.localStorage.setItem("orders", serialize(orders));
  }, [orders]);
  return { orders, setOrders: updateOrders };
}
export function useCart() {
  const [cart, setCart] = useState<ICartProduct[]>(
    () => getValueFromLocalStorage("cartItems") || [],
  );
  useEffect(() => {
    window.localStorage.setItem("cartItems", serialize(cart));
  }, [cart]);

  const clearCart = () => {
    if ("cartItems" in window.localStorage) {
      window.localStorage.removeItem("cartItems");
    }
    setCart([]);
  };
  const addToCart = (product: IProduct) => {
    // Check the product is already in the cart
    const cloned: ICartProduct[] = clone<ICartProduct[]>(cart);
    const currentFoundProduct = cloned.find((item) => item.id === product.id);
    if (currentFoundProduct) {
      // If already there increase count
      currentFoundProduct.count += 1;
      setCart(cloned);
    } else {
      // Otherwise put count = 1;
      const productToBeAdded = { ...product, count: 1 };
      const updatedCart = [...cart, productToBeAdded];
      setCart(updatedCart);
    }
  };
  const removeFromCart = (product: IProduct) => {
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
  return { cart, addToCart, removeFromCart, setCart, clearCart };
}
