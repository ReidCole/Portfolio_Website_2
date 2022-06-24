import thumbnail_sn from "../../public/img/simplenotes.jpg";
import thumbnail_mlm from "../../public/img/movielistmaker.jpg";
import thumbnail_rd from "../../public/img/reidsdrinks.jpg";
import thumbnail_old from "../../public/img/oldportfolio.jpg";
import logo_next from "../../public/img/logos/nextjs_logo.svg";
import logo_redux from "../../public/img/logos/redux_logo.svg";
import logo_tailwind from "../../public/img/logos/tailwindcss_logo.svg";
import logo_ts from "../../public/img/logos/ts_logo.svg";
import logo_cypress from "../../public/img/logos/cypress_logo.svg";
import logo_express from "../../public/img/logos/express_logo.png";
import logo_mongodb from "../../public/img/logos/mongodb_logo.svg";
import logo_css from "../../public/img/logos/css_logo.svg";

import ContentContainer from "../ContentContainer";
import ProjectItem from "./ProjectItem";
import SectionHeading from "../SectionHeading";

const ProjectsSection = () => {
  return (
    <section className="px-4 mt-10 mb-10">
      <ContentContainer>
        <SectionHeading className="mb-10">Recent Projects</SectionHeading>

        <div className="flex flex-col gap-6">
          <ProjectItem
            name="Simple Notes"
            imageSrc={thumbnail_sn}
            href="https://simplenotes-rc.netlify.app"
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
          <ProjectItem
            name="Movie List Maker"
            imageSrc={thumbnail_mlm}
            href="https://client.movielistmakerserver.xyz"
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
          <ProjectItem
            name="Reid's Drinks"
            imageSrc={thumbnail_rd}
            href="https://reidsdrinks.netlify.app"
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
          <ProjectItem
            name="Old Portfolio Site"
            imageSrc={thumbnail_old}
            href="https://oldreidcole.netlify.app"
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
                name: "CSS",
                logoSrc: logo_css,
              },
            ]}
          />
        </div>
      </ContentContainer>
    </section>
  );
};

export default ProjectsSection;
