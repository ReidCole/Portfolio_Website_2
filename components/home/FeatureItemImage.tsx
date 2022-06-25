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
      sx={{ fontSize: "150px", backgroundColor: "background" }}
      className={"flex flex-shrink-0 h-60 items-center justify-center " + className}
    >
      <i className={"flex bi-" + iconClassName} />
    </div>
  );
};

export default FeatureItemImage;
