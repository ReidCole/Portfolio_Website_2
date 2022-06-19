/** @jsxImportSource theme-ui */
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a
        sx={{
          backgroundColor: router.pathname === href ? "background" : "code_off_tab",
        }}
        className="px-4 h-full flex flex-row items-center"
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
