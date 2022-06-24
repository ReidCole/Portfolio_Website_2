/** @jsxImportSource theme-ui */
import unloadedImg from "../../public/img/unloaded.jpg";

import Image, { StaticImageData } from "next/image";
import HTMLTagStyledText from "../HTMLTagStyledText";
import FeatureItemImage from "./FeatureItemImage";
import ScrollViewContainer from "../ScrollViewContainer";

type Props = {
  heading: string;
  points: string[];
  imageSide: "left" | "right";
  iconClassName: string;
};

const FeatureItem: React.FC<Props> = ({ heading, points, imageSide, iconClassName }) => {
  const formattedHeading = heading.replace(/\s+/g, "");

  return (
    <ScrollViewContainer>
      {/* Desktop Version */}
      <div
        className={
          "hidden gap-10 lg:flex " + (imageSide === "left" ? "lg:flex-row" : "lg:flex-row-reverse")
        }
      >
        <FeatureItemImage iconClassName={iconClassName} className="w-1/2" />
        <div className="w-1/2">
          <HTMLTagStyledText wrapperElement={"h3"} className="text-3xl mb-2">
            {formattedHeading}
          </HTMLTagStyledText>
          <ul className="list-disc flex flex-col gap-1">
            {points.map((point, index) => (
              <li className="ml-4" key={index}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex flex-col lg:hidden">
        <HTMLTagStyledText wrapperElement={"h3"} className="text-2xl xs:text-3xl mb-2">
          {formattedHeading}
        </HTMLTagStyledText>
        <FeatureItemImage iconClassName={iconClassName} className="mb-2" />
        <div>
          <ul className="list-disc flex flex-col gap-1">
            {points.map((point, index) => (
              <li className="ml-4" key={index}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollViewContainer>
  );
};

export default FeatureItem;
