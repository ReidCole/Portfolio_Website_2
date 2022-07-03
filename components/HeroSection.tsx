/** @jsxImportSource theme-ui */

import ReactTyped from "react-typed";
import ScrollViewContainer from "./ScrollViewContainer";

const HeroSection = () => {
  return (
    <ScrollViewContainer>
      <section
        sx={{
          borderColor: "code_button_hover",
          fontFamily: "code",
        }}
        className="flex flex-col gap-2 py-16 sm:py-28 lg:py-40 border-b-2"
      >
        <h1
          sx={{ color: "code_element" }}
          className="text-center text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span sx={{ color: "code_bracket" }}>&lt;</span>reidcole
          <span sx={{ color: "code_bracket" }}>/&gt;</span>
        </h1>
        <div className="text-md xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-center gap-1">
          F
          <ReactTyped
            strings={["ull-Stack Web Developer"]}
            loop={false}
            showCursor={false}
            typeSpeed={50}
          />
        </div>
      </section>
    </ScrollViewContainer>
  );
};

export default HeroSection;
