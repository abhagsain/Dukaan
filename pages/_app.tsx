import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "../context/AppContext";
import { useCart, useOrders } from "../hooks";
import "../styles/globals.css";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const { orders, setOrders } = useOrders();
  return (
    <AppContext.Provider
      value={{ cart, orders, addToCart, removeFromCart, clearCart, setOrders }}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
