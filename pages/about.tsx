import { NextPage } from "next";
import Head from "next/head";
import StorySection from "../components/about/StorySection";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reid Cole - About Me</title>
      </Head>

      <StorySection />
    </div>
  );
};

export default About;
