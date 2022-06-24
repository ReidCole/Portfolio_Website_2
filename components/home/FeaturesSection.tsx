/** @jsxImportSource theme-ui */
import img_auth from "../../public/img/experience/experience_auth.webp";
import img_responsive from "../../public/img/experience/experience_responsive.webp";

import ContentContainer from "../ContentContainer";
import SectionHeading from "../SectionHeading";
import FeatureItem from "./FeatureItem";

const FeaturesSection = () => {
  return (
    <section
      sx={{ backgroundColor: "background2", borderColor: "code_button_hover" }}
      className="py-10 px-4 border-b-2"
    >
      <ContentContainer>
        <SectionHeading>My Experience</SectionHeading>
        <p sx={{ color: "subtext" }} className="text-center mb-20 italic">
          Techniques, features, or skills I&apos;ve used in my projects
        </p>

        <div className="flex flex-col gap-40">
          <FeatureItem
            imageSide="right"
            iconClassName="person-check"
            heading="Authentication"
            points={[
              "Resetting your password",
              "Email verification",
              "Email and password validation",
              "API authorization",
            ]}
          />
          <FeatureItem
            imageSide="left"
            iconClassName="phone"
            heading="Responsive Design"
            points={[
              "Desktop friendly",
              "Mobile friendly",
              "Auto-resizing text",
              "Navigation swaps between header and sidebar",
            ]}
          />
          <FeatureItem
            imageSide="right"
            iconClassName="list-check"
            heading="Testing"
            points={["Unit tests", "Integration tests", "Cypress", "React Testing Library"]}
          />
          <FeatureItem
            imageSide="left"
            heading="Databases"
            iconClassName="file-spreadsheet"
            points={[
              "Storing account data",
              "Storing user-generated content",
              "MongoDB",
              "Firebase Firestore",
            ]}
          />
          <FeatureItem
            imageSide="right"
            heading="Accessibility"
            iconClassName="zoom-in"
            points={[
              "Color contrast",
              "Focus states",
              "Proper semantic tags and labels",
              "Intuitive tab order",
            ]}
          />
          <FeatureItem
            iconClassName="brush"
            imageSide="left"
            heading="Styling"
            points={["Hover states", "Light and dark themes", "CSS", "Tailwind CSS"]}
          />
        </div>
      </ContentContainer>
    </section>
  );
};

export default FeaturesSection;
