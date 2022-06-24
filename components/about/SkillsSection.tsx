import logo_tailwind from "../../public/img/logos/tailwindcss_logo.svg";
import logo_ts from "../../public/img/logos/ts_logo.svg";
import logo_js from "../../public/img/logos/js_logo.svg";
import logo_cypress from "../../public/img/logos/cypress_logo.svg";
import logo_express from "../../public/img/logos/express_logo.png";
import logo_css from "../../public/img/logos/css_logo.svg";
import logo_react from "../../public/img/logos/react_logo.svg";
import logo_html from "../../public/img/logos/html_logo.svg";
import logo_git from "../../public/img/logos/git_logo.svg";

import ContentContainer from "../ContentContainer";
import ScrollViewContainer from "../ScrollViewContainer";
import SectionHeading from "../SectionHeading";
import SkillItem from "./SkillItem";

const SkillsSection = () => {
  return (
    <section className="px-4">
      <ContentContainer>
        <SectionHeading className="mb-4">Skills</SectionHeading>

        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 mb-4">
          <SkillItem logoSrc={logo_html}>HTML</SkillItem>
          <SkillItem logoSrc={logo_css}>CSS</SkillItem>
          <SkillItem logoSrc={logo_js}>JavaScript</SkillItem>
          <SkillItem logoSrc={logo_ts}>TypeScript</SkillItem>
          <SkillItem logoSrc={logo_react}>React JS</SkillItem>
          <SkillItem logoSrc={logo_express}>Express JS</SkillItem>
          <SkillItem logoSrc={logo_git}>Git & GitHub</SkillItem>
          <SkillItem logoSrc={logo_tailwind}>Tailwind CSS</SkillItem>
          <SkillItem logoSrc={logo_cypress}>Cypress</SkillItem>
        </ul>
      </ContentContainer>
    </section>
  );
};

export default SkillsSection;
