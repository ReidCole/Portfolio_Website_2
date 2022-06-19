/** @jsxImportSource theme-ui */

import type { NextPage } from "next";
import Head from "next/head";
import ScrollViewContainer from "../components/ScrollViewContainer";
import ReactTyped from "react-typed";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reid Cole - Web Developer</title>
      </Head>

      <ScrollViewContainer className="flex flex-col gap-2 mt-6">
        <h1
          sx={{ fontFamily: "code", color: "code_element" }}
          className="text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span sx={{ color: "code_bracket" }}>&lt;</span>reidcole
          <span sx={{ color: "code_bracket" }}>/&gt;</span>
        </h1>
        <div
          className="text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-center gap-1"
          sx={{ fontFamily: "code" }}
        >
          F
          <ReactTyped
            strings={["ull-Stack Web Developer"]}
            loop={false}
            showCursor={false}
            typeSpeed={50}
          />
        </div>
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
