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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reid Cole - Web Developer</title>
      </Head>

      <HeroSection />

      <FeaturesSection />
    </>
  );
};

export default Home;
