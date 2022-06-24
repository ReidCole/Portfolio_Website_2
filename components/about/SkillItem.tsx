/** @jsxImportSource theme-ui */
import Image, { StaticImageData } from "next/image";
import useThemeType from "../../hooks/useThemeType";
import ScrollViewContainer from "../ScrollViewContainer";

type Props = {
  logoSrc: string | StaticImageData;
  children: string;
  invertOnLightTheme?: boolean;
};

const SkillItem: React.FC<Props> = ({ logoSrc, children, invertOnLightTheme = false }) => {
  const themeType = useThemeType();

  return (
    <ScrollViewContainer>
      <li
        sx={{ backgroundColor: "background2", borderColor: "code_button_hover" }}
        className="flex flex-row items-center gap-2 text-lg p-2 border-2 shadow-md"
      >
        <Image
          src={logoSrc}
          alt={children + " logo"}
          width={40}
          height={40}
          className={invertOnLightTheme === true && themeType === "light" ? "invert" : ""}
        />{" "}
        {children}
      </li>
    </ScrollViewContainer>
  );
};

export default SkillItem;
