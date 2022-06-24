/** @jsxImportSource theme-ui */

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
        <SectionHeading>Feature Showcase</SectionHeading>
        <p sx={{ color: "subtext" }} className="text-center mb-20 italic">
          Features I implement into my projects
        </p>

        <div className="flex flex-col gap-40">
          <FeatureItem
            imageSide="right"
            heading="Authentication"
            points={[
              "Password resetting",
              "Email verification",
              "Email and password validation",
              "Multi-factor authentication",
              "OAuth providers (Google, Facebook, Microsoft, etc.)",
            ]}
          />
          <FeatureItem
            imageSide="left"
            heading="Responsive Design"
            points={[
              "Desktop friendly",
              "Mobile friendly",
              "Auto-resizing text",
              "Navigation swaps between header and sidebar",
            ]}
          />
        </div>
      </ContentContainer>
    </section>
  );
};

export default FeaturesSection;
