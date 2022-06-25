import { NextPage } from "next";
import Head from "next/head";
import ProjectsSection from "../components/projects/ProjectsSection";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reid Cole - My Projects</title>
      </Head>

      <ProjectsSection />
    </div>
  );
};

export default Projects;
