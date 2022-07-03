import { NextPage } from "next";
import Head from "next/head";
import SkillsSection from "../components/SkillsSection";
import StorySection from "../components/StorySection";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reid Cole - About Me</title>
      </Head>

      <StorySection />

      <SkillsSection />
    </div>
  );
};

export default About;
