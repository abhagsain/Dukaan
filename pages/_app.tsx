import "../styles/globals.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from '../theme'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
