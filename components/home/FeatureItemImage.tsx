/** @jsxImportSource theme-ui */

import unloadedImg from "../../public/img/unloaded.jpg";
import Image, { StaticImageData } from "next/image";

type Props = {
  iconClassName: string;
  className?: string;
};

const FeatureItemImage: React.FC<Props> = ({ iconClassName, className = "" }) => {
  return (
    <div
      sx={{ fontSize: "10rem", borderColor: "code_button_hover" }}
      className={"flex flex-shrink-0 h-52 items-center justify-center border-2 " + className}
    >
      <i className={"flex bi-" + iconClassName} />
    </div>
  );
};

export default FeatureItemImage;
