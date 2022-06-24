/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import { useState } from "react";
import { useColorMode } from "theme-ui";
import useDropdownState from "../hooks/useDropdownState";
import Dropdown from "./Dropdown";
import HeaderButton from "./HeaderButton";
import NavLink from "./NavLink";
import Sidebar from "./Sidebar";
import SidebarLink from "./SidebarLink";
import ThemeDropdown from "./ThemeDropdown";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const router = useRouter();
  const fileName = (router.pathname === "/" ? "index" : router.pathname.substring(1)) + ".tsx";
  const [themeDropdownState, openThemeDropdown] = useDropdownState();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function onSelectTheme(theme: string) {
    setColorMode(theme);
  }

  return (
    <>
      <header
        sx={{
          backgroundColor: "background2",
          fontFamily: "body",
        }}
        className="fixed w-full top-0 left-0 z-10 shadow-lg h-20 select-none"
      >
        <div className="hidden md:flex flex-row justify-between h-12">
          <nav
            sx={{
              gap: "1px",
            }}
            className="h-full text-lg flex flex-row items-center w-max"
          >
            <NavLink href="/" iconClass="house">
              Home
            </NavLink>
            <NavLink href="/about" iconClass="person">
              About
            </NavLink>
            <NavLink href="/projects" iconClass="view-list">
              Projects
            </NavLink>
          </nav>
          <div className="flex flex-row h-full items-center px-2 gap-2">
            <HeaderButton
              type="link"
              iconClass="envelope-fill"
              href="mailto:reid-cole@outlook.com"
              title="Email"
            />
            <HeaderButton
              type="link"
              iconClass="linkedin"
              href="https://www.linkedin.com/in/reid-cole/"
              title="LinkedIn"
              newTab
            />
            <HeaderButton
              type="link"
              iconClass="github"
              href="https://github.com/ReidCole"
              title="GitHub"
              newTab
            />
            <HeaderButton
              type="button"
              iconClass="moon-stars-fill"
              title="Change Theme"
              onClick={() => openThemeDropdown()}
            />
            <ThemeDropdown
              dropdownState={themeDropdownState}
              onSelectTheme={onSelectTheme}
              className="top-12 right-4"
            />
          </div>
        </div>

        <div className="flex md:hidden flex-row justify-between h-12">
          <button title="Open Sidebar" onClick={() => setIsSidebarOpen(true)}>
            <i className="flex bi-list text-3xl px-4 items-center justify-center h-full" />
          </button>
          <Sidebar isOpen={isSidebarOpen} close={() => setIsSidebarOpen(false)}>
            <SidebarLink href="/" iconClass="house">
              Home
            </SidebarLink>
            <SidebarLink href="/about" iconClass="person">
              About
            </SidebarLink>
            <SidebarLink href="/projects" iconClass="view-list">
              Projects
            </SidebarLink>
          </Sidebar>
        </div>

        <div
          sx={{
            backgroundColor: "background",
            color: "subtext",
          }}
          className="px-4 h-8 flex flex-row items-center text-lg whitespace-nowrap gap-1"
        >
          <span>pages</span> <i className="bi-chevron-right" /> <span>{fileName}</span>
        </div>
      </header>
      <div className="h-20" />
    </>
  );
};

export default Header;
