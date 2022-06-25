import { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <meta
          name="description"
          content="Reid Cole's portfolio page, showcasing projects and skills."
        />
      </Head>
      <body>
        <InitializeColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
