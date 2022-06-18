/** @jsxImportSource theme-ui */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme } from "../styles/theme";
import { ScrollProvider } from "../context/ScrollContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default MyApp;
