/** @jsxImportSource theme-ui */

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useColorMode } from "theme-ui";
import ScrollViewContainer from "../ScrollViewContainer";

type Props = {
  name: string;
  imageSrc: string | StaticImageData;
  href: string;
  packages: ShowcasePackage[];
};

type ShowcasePackage = {
  name: string;
  logoSrc: string | StaticImageData;
  invertOnLightTheme?: boolean;
};

const ProjectItem: React.FC<Props> = ({ name, imageSrc, href, packages }) => {
  const [colorMode, setColorMode] = useColorMode();
  const [themeType, setThemeType] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (colorMode.toLowerCase().includes("light")) {
      setThemeType("light");
    } else {
      setThemeType("dark");
    }
  }, [colorMode]);

  return (
    <ScrollViewContainer>
      <a href={href} rel="noopener noreferrer" target="_blank" title={`Visit ${name}`}>
        <div
          sx={{
            backgroundColor: "background2",
            borderColor: "code_button_hover",
            ":hover": {
              borderColor: "code_element",
            },
          }}
          className="p-3 shadow-lg group border-2"
        >
          <h3 className="text-xl mb-1">{name}</h3>
          <div className="flex flex-col lg:flex-row lg:gap-4 text-lg">
            <div className="flex flex-shrink-0 mb-2 lg:mb-0 lg:w-1/2">
              <Image
                src={imageSrc}
                alt="simple notes website"
                className={
                  "group-hover:brightness-100 " +
                  (themeType === "dark" ? "brightness-75" : "brightness-100")
                }
                priority
                width={1280}
                height={720}
              />
            </div>

            <div className="h-full" sx={{ fontFamily: "body" }}>
              <p className="mb-2">Made with:</p>
              <div className="flex flex-col gap-3">
                {packages.map((p, index) => (
                  <div key={index} className="flex flex-row items-center gap-2">
                    <Image
                      src={p.logoSrc}
                      alt={p.name + " logo"}
                      width={40}
                      height={40}
                      className={
                        p.invertOnLightTheme === true && themeType === "light" ? "invert" : ""
                      }
                    />
                    <p>{p.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </ScrollViewContainer>
  );
};

export default ProjectItem;
