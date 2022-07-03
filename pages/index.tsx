/** @jsxImportSource theme-ui */
import type { NextPage } from "next";
import Head from "next/head";
import ScrollViewContainer from "../components/ScrollViewContainer";
import ReactTyped from "react-typed";
import ContentContainer from "../components/ContentContainer";
import ProjectItem from "../components/ProjectItem";
import SectionHeading from "../components/SectionHeading";
import HeroSection from "../components/HeroSection";
import Link from "next/link";
import ExtraLink from "../components/ExtraLink";
import ProjectsSection from "../components/ProjectsSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reid Cole - Web Developer</title>
      </Head>

      <HeroSection />

      <ProjectsSection />

      <div className="my-10 gap-4 flex flex-row items-center justify-center px-4">
        <ExtraLink href="/about">See my skills</ExtraLink>
      </div>
    </>
  );
};

export default Home;
