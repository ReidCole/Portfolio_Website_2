/** @jsxImportSource theme-ui */

import unloadedImg from "../../public/img/unloaded.jpg";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
  altTextName: string;
  className: string;
};

const FeatureItemImage: React.FC<Props> = ({ src, altTextName, className }) => {
  return (
    <div
      sx={{ borderColor: "code_button_hover" }}
      className={"flex flex-shrink-0 h-full border-2 shadow-lg " + className}
    >
      <Image
        placeholder="blur"
        blurDataURL={unloadedImg.src}
        src={src}
        width={900}
        height={600}
        alt={`${altTextName} example`}
      />
    </div>
  );
};

export default FeatureItemImage;
