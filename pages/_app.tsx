import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import { IProduct } from "../types";
import { useCart } from "../hooks";

function MyApp({ Component, pageProps }: AppProps) {
  const { cart, addToCart, removeFromCart } = useCart();
  const [orders, setOrders] = useState(() => {
    // Initialize orders with the items from local storage
    return [];
  });
  return (
    <AppContext.Provider value={{ cart, orders, addToCart, removeFromCart }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
