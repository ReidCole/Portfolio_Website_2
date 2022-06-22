/** @jsxImportSource theme-ui */
import type { NextPage } from "next";
import Head from "next/head";
import ScrollViewContainer from "../components/ScrollViewContainer";
import ReactTyped from "react-typed";
import ContentContainer from "../components/ContentContainer";
import ProjectItem from "../components/ProjectItem";
import SectionHeading from "../components/SectionHeading";
import FeatureShowcaseItem from "../components/FeatureShowcaseItem";

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
        <section className="mt-20">
          <SectionHeading>Feature Showcase</SectionHeading>

          <FeatureShowcaseItem
            heading="Authentication"
            points={[
              "Signing in and out",
              "Creating and deleting an account",
              "Password resetting",
              "Email verification",
              "Email and password validation",
              "Multi-factor authentication",
              "OAuth providers (Google, Facebook, Microsoft, etc.)",
            ]}
          />
        </section>
      </ContentContainer>
    </>
  );
};

export default Home;
