/** @jsxImportSource theme-ui */
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <>
      <header
        sx={{
          backgroundColor: "background2",
        }}
        className="fixed w-full top-0 left-0 z-10 transition-shadow shadow-lg h-20"
      >
        <nav
          sx={{
            backgroundColor: "background",
          }}
          className="h-12 text-lg flex flex-row items-center gap-0.5 w-max"
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
        <div
          sx={{
            backgroundColor: "background",
            color: "subtext",
          }}
          className="px-4 h-8 flex flex-row items-center text-lg whitespace-nowrap"
        >
          pages &gt; index.tsx
        </div>
      </header>
      <div className="h-20" />
    </>
  );
};

export default Header;
