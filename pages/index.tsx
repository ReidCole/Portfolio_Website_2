/** @jsxImportSource theme-ui */
import type { NextPage } from "next";
import Head from "next/head";
import ScrollViewContainer from "../components/ScrollViewContainer";
import ReactTyped from "react-typed";
import ContentContainer from "../components/ContentContainer";
import ProjectItem from "../components/projects/ProjectItem";
import SectionHeading from "../components/SectionHeading";
import FeatureItem from "../components/features/FeatureItem";
import FeaturesSection from "../components/features/FeaturesSection";
import HeroSection from "../components/hero/HeroSection";

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
