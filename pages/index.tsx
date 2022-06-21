/** @jsxImportSource theme-ui */

import thumbnail_sn from "../public/img/simplenotes.jpg";
import thumbnail_mlm from "../public/img/movielistmaker.jpg";
import thumbnail_rd from "../public/img/reidsdrinks.jpg";
import logo_next from "../public/img/logos/nextjs_logo.svg";
import logo_redux from "../public/img/logos/redux_logo.svg";
import logo_tailwind from "../public/img/logos/tailwindcss_logo.svg";
import logo_ts from "../public/img/logos/ts_logo.svg";
import logo_cypress from "../public/img/logos/cypress_logo.svg";
import logo_express from "../public/img/logos/express_logo.png";
import logo_mongodb from "../public/img/logos/mongodb_logo.svg";
import logo_css from "../public/img/logos/css_logo.svg";

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
              imageSrc={thumbnail_sn}
              href="https://simplenotes-rc.netlify.app"
              description="A simple app where you can write and save notes to the cloud."
              packages={[
                {
                  name: "Next JS",
                  logoSrc: logo_next,
                  invertOnLightTheme: true,
                },
                {
                  name: "Redux",
                  logoSrc: logo_redux,
                },
                {
                  name: "Tailwind CSS",
                  logoSrc: logo_tailwind,
                },
              ]}
            />
            <ShowcaseItem
              name="Movie List Maker"
              imageSrc={thumbnail_mlm}
              href="https://client.movielistmakerserver.xyz"
              description=""
              packages={[
                {
                  name: "Express JS",
                  logoSrc: logo_express,
                },
                {
                  name: "MongoDB",
                  logoSrc: logo_mongodb,
                  invertOnLightTheme: true,
                },
                {
                  name: "CSS",
                  logoSrc: logo_css,
                },
              ]}
            />
            <ShowcaseItem
              name="Reid's Drinks"
              imageSrc={thumbnail_rd}
              href="https://reidsdrinks.netlify.app"
              description=""
              packages={[
                {
                  name: "Next JS",
                  logoSrc: logo_next,
                  invertOnLightTheme: true,
                },
                {
                  name: "TypeScript",
                  logoSrc: logo_ts,
                },
                {
                  name: "Cypress",
                  logoSrc: logo_cypress,
                },
              ]}
            />
          </div>
        </section>
      </ContentContainer>
    </>
  );
};

export default Home;
