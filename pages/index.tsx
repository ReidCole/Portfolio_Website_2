/** @jsxImportSource theme-ui */
import type { NextPage } from "next";
import Head from "next/head";
import ScrollViewContainer from "../components/ScrollViewContainer";
import ReactTyped from "react-typed";
import ContentContainer from "../components/ContentContainer";
import ProjectItem from "../components/projects/ProjectItem";
import SectionHeading from "../components/SectionHeading";
import FeatureItem from "../components/home/FeatureItem";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import Link from "next/link";
import ExtraLink from "../components/home/ExtraLink";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reid Cole - Web Developer</title>
      </Head>

      <HeroSection />

      <FeaturesSection />

      <div className="my-10 gap-4 flex flex-row items-center justify-center">
        <ExtraLink href="/projects">Check out my projects</ExtraLink>
        <ExtraLink href="/about">See my skills</ExtraLink>
      </div>
    </>
  );
};

export default Home;
