import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme } from "../styles/theme";
import { ScrollProvider } from "../context/ScrollContext";
import Layout from "../components/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ScrollProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default MyApp;
