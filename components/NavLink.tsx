/** @jsxImportSource theme-ui */
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  children: React.ReactNode;
  iconClass: string;
};

const NavLink: React.FC<Props> = ({ href, children, iconClass }) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a
        sx={{
          backgroundColor: router.pathname === href ? "background" : "code_off_tab",
          ":hover": {
            backgroundColor: "background",
          },
        }}
        className="px-4 h-full flex flex-row gap-2 items-center"
      >
        <i className={`bi-${iconClass} flex text-xl`} /> {children}
      </a>
    </Link>
  );
};

export default NavLink;
