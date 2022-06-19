/** @jsxImportSource theme-ui */
import Link from "next/link";
import { ThemeUIStyleObject } from "theme-ui";

type Props = {
  type: "button" | "link";
  iconClass: string;
  onClick?: () => void;
  href?: string;
  newTab?: boolean;
  title: string;
};

const className = "flex items-center justify-center p-1.5 text-2xl rounded-lg";
const sx: ThemeUIStyleObject = {
  ":hover": { backgroundColor: "code_button_hover" },
};

const HeaderButton: React.FC<Props> = ({
  type,
  iconClass,
  href,
  onClick,
  newTab = false,
  title,
}) => {
  if (type === "button") {
    return (
      <button onClick={onClick} className={className} sx={sx} title={title}>
        <i className={`flex bi-${iconClass}`} />
      </button>
    );
  } else {
    return (
      <Link href={href || "#"} passHref>
        <a
          className={className}
          sx={sx}
          target={newTab ? "_blank" : undefined}
          rel="noreferrer noopener"
          title={title}
        >
          <i className={`flex bi-${iconClass}`} />
        </a>
      </Link>
    );
  }
};

export default HeaderButton;
