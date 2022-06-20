/** @jsxImportSource theme-ui */
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
  children: string;
  iconClass: string;
};

const SidebarLink: React.FC<Props> = ({ href, children, iconClass }) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a
        sx={{
          backgroundColor: router.pathname === href ? "code_off_tab" : "background",
        }}
        className="px-3 py-4 text-xl flex flex-row items-center gap-2"
      >
        <i className={`bi-${iconClass} flex text-2xl`} /> {children}
      </a>
    </Link>
  );
};

export default SidebarLink;
