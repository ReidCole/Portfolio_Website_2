import { NextPage } from "next";
import Head from "next/head";
import ProjectsSection from "../components/sections/ProjectsSection";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reid Cole - About Me</title>
      </Head>

      <ProjectsSection />
    </div>
  );
};

export default Projects;
