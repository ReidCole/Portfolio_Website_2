/** @jsxImportSource theme-ui */

import type { NextPage } from "next";
import Head from "next/head";
import { useColorMode, useThemeUI } from "theme-ui";
import Header from "../components/Header";
import ScrollViewContainer from "../components/ScrollViewContainer";

const Home: NextPage = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <Head>
        <title>Reid Cole - Web Developer</title>
      </Head>

      <Header />

      <ScrollViewContainer className="flex flex-col gap-2 mt-4">
        <h1 sx={{ fontFamily: "code", color: "code_element" }} className="text-center text-6xl">
          <span sx={{ color: "code_bracket" }}>&lt;</span>reidcole
          <span sx={{ color: "code_bracket" }}>/&gt;</span>
          <span sx={{ color: "code_caret" }} className="animate-blink">
            |
          </span>
        </h1>
        <p sx={{ fontFamily: "code" }} className="text-center text-xl">
          Front-End/Full-Stack Web Developer
        </p>
      </ScrollViewContainer>

      <p className="mb-96">spacer</p>
      <p className="mb-96">spacer</p>
      <p className="mb-96">spacer</p>
      <p className="mb-96">spacer</p>
      <p className="mb-96">spacer</p>
      <p className="mb-96">spacer</p>
    </>
  );
};

export default Home;
