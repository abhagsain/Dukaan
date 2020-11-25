import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "../context/AppContext";
import { useCart } from "../hooks";
import "../styles/globals.css";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [orders, setOrders] = useState(() => {
    // Initialize orders with the items from local storage
    return [];
  });
  return (
    <AppContext.Provider value={{ cart, orders, addToCart, removeFromCart, clearCart }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
