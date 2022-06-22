/** @jsxImportSource theme-ui */
import unloadedImg from "../public/img/unloaded.jpg";

import Image from "next/image";

type Props = {
  heading: string;
  points: string[];
};

const FeatureShowcaseItem: React.FC<Props> = ({ heading, points }) => {
  return (
    <div
      sx={{
        backgroundColor: "background2",
        borderColor: "code_button_hover",
        ":hover": {
          borderColor: "code_element",
        },
      }}
      className="flex flex-row p-3 border-2"
    >
      <div>
        <h3 className="text-xl font-bold">{heading}</h3>
        <ul className="list-disc">
          {points.map((point, index) => (
            <li className="ml-4" key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Image src={unloadedImg} width={900} height={600} />
      </div>
    </div>
  );
};

export default FeatureShowcaseItem;
