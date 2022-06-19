/** @jsxImportSource theme-ui */
import { useRouter } from "next/router";
import { useColorMode } from "theme-ui";
import useDropdownState from "../hooks/useDropdownState";
import Dropdown from "./Dropdown";
import HeaderButton from "./HeaderButton";
import NavLink from "./NavLink";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const router = useRouter();
  const fileName = (router.pathname === "/" ? "index" : router.pathname.substring(1)) + ".tsx";
  const [themeDropdownState, openThemeDropdown] = useDropdownState();

  function onSelectTheme(theme: string) {
    setColorMode(theme);
  }

  return (
    <>
      <header
        sx={{
          backgroundColor: "background2",
        }}
        className="fixed w-full top-0 left-0 z-10 shadow-lg h-20"
      >
        <div className="flex flex-row justify-between h-12">
          <nav
            sx={{
              backgroundColor: "background",
            }}
            className="h-full text-lg flex flex-row items-center gap-0.5 w-max"
          >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
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
            <Dropdown
              state={themeDropdownState}
              options={[
                { text: "Dark (Default)", onClick: () => onSelectTheme("dark") },
                { text: "Light", onClick: () => onSelectTheme("light") },
                { text: "Solarized Dark", onClick: () => onSelectTheme("solarizedDark") },
              ]}
            />
          </div>
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
