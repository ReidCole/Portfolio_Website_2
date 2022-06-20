/** @jsxImportSource theme-ui */

import snImg from "../public/img/simplenotes_screenshot2.jpg";
import mlmImg from "../public/img/movielistmaker_screenshot2.jpg";

import type { NextPage } from "next";
import Head from "next/head";
import ScrollViewContainer from "../components/ScrollViewContainer";
import ReactTyped from "react-typed";
import ContentContainer from "../components/ContentContainer";
import ShowcaseItem from "../components/ShowcaseItem";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reid Cole - Web Developer</title>
      </Head>

      <ScrollViewContainer className="flex flex-col gap-2 mt-10">
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

      <ContentContainer>
        <section className="mx-4 mt-32 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Recent Projects</h2>

          <div className="flex flex-col gap-6">
            <ShowcaseItem
              name="Simple Notes"
              imageSrc={snImg}
              href="https://simplenotes-rc.netlify.app"
            />
            <ShowcaseItem
              name="Movie List Maker"
              imageSrc={mlmImg}
              href="https://client.movielistmakerserver.xyz"
            />
            <ShowcaseItem
              name="Reid's Drinks"
              imageSrc={snImg}
              href="https://reidsdrinks.netlify.app"
            />
          </div>
        </section>
      </ContentContainer>
    </>
  );
};

export default Home;
