/** @jsxImportSource theme-ui */

import type { NextPage } from "next";
import Head from "next/head";
import { useColorMode, useThemeUI } from "theme-ui";
import Header from "../components/Header";
import ScrollViewContainer from "../components/ScrollViewContainer";
import ReactTyped from "react-typed";

const Home: NextPage = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <Head>
        <title>Reid Cole - Web Developer</title>
      </Head>

      <ScrollViewContainer className="flex flex-col gap-2 mt-6">
        <h1 sx={{ fontFamily: "code", color: "code_element" }} className="text-center text-6xl">
          <span sx={{ color: "code_bracket" }}>&lt;</span>reidcole
          <span sx={{ color: "code_bracket" }}>/&gt;</span>
        </h1>
        <div className="text-xl text-center gap-1" sx={{ fontFamily: "code" }}>
          F
          <ReactTyped
            strings={["ull-Stack Web Developer"]}
            loop={false}
            showCursor={false}
            typeSpeed={50}
          />
        </div>
      </ScrollViewContainer>

      <div className="flex flex-row"></div>

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
