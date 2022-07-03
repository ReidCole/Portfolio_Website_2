/** @jsxImportSource theme-ui */

import Link from "next/link";

type Props = {
  children: string;
  href: string;
};

const ExtraLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <a
        sx={{
          backgroundColor: "background2",
          borderColor: "code_button_hover",
          color: "code_element",
          ":hover": {
            borderColor: "code_element",
          },
        }}
        className="px-4 py-2 text-lg border-2 flex flex-row items-center justify-center w-max gap-1"
      >
        <span>{children}</span> <i className="bi-chevron-right flex" />
      </a>
    </Link>
  );
};

export default ExtraLink;
