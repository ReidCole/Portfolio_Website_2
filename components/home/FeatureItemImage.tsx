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
      sx={{ backgroundColor: "background" }}
      className={
        "flex flex-shrink-0 h-48 xs:h-60 items-center justify-center text-icon-sm xs:text-icon-lg " +
        className
      }
    >
      <i className={"flex bi-" + iconClassName} />
    </div>
  );
};

export default FeatureItemImage;
