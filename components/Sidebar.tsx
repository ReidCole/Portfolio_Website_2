/** @jsxImportSource theme-ui */
import ThemeDropdown from "./ThemeDropdown";
import { useEffect, useRef, useState } from "react";
import { useColorMode } from "theme-ui";
import useDropdownState from "../hooks/useDropdownState";
import Dropdown from "./Dropdown";
import SidebarLink from "./SidebarLink";

type Props = {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
};

const Sidebar: React.FC<Props> = ({ isOpen, close, children }) => {
  const buttonsParent = useRef<HTMLDivElement>(null);
  const buttonsParent2 = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [themeDropdownState, openThemeDropdown] = useDropdownState();
  const [colorMode, setColorMode] = useColorMode();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    function callback() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", callback);
    callback();
    return () => window.removeEventListener("resize", callback);
  }, []);

  function onSelectTheme(theme: string) {
    setColorMode(theme);
  }

  useEffect(() => {
    if (buttonsParent.current === null || buttonsParent2.current === null) return;

    function setChildrenTabIndices(tabIndex: number) {
      if (buttonsParent.current === null || buttonsParent2.current === null) return;
      const parentElements = [buttonsParent.current, buttonsParent2.current];

      for (let i = 0; i < parentElements.length; i++) {
        const parentElement = parentElements[i];
        const childElements = parentElement.children;
        for (let j = 0; j < childElements.length; j++) {
          const element = childElements[j] as HTMLElement;
          element.tabIndex = tabIndex;
        }
      }
    }

    if (isOpen) {
      setChildrenTabIndices(0);
      if (closeButton.current !== null) closeButton.current.tabIndex = 0;
    } else {
      setChildrenTabIndices(-1);
      if (closeButton.current !== null) closeButton.current.tabIndex = -1;
    }
  }, [isOpen]);

  useEffect(() => {
    // make sidebar close when a button is clicked
    if (buttonsParent.current === null) return;

    function onClick() {
      console.log("click");
      close();
    }

    const childButtons = buttonsParent.current.children;

    for (let i = 0; i < childButtons.length; i++) {
      const element = childButtons[i] as HTMLElement;
      element.addEventListener("click", onClick);
    }

    return () => {
      for (let i = 0; i < childButtons.length; i++) {
        const element = childButtons[i] as HTMLElement;
        element.removeEventListener("click", onClick);
      }
    };
  }, [close]);

  return (
    <>
      <div
        id="background"
        className={
          "bg-black transition-opacity fixed h-screen w-screen top-0 left-0 z-30 " +
          (isOpen ? "pointer-events-auto opacity-50" : "pointer-events-none opacity-0")
        }
        onClick={(e) => {
          const t = e.target as Element;
          if (t.id === "background") close();
        }}
      />
      <div
        style={{
          height: windowHeight,
        }}
        className={
          "fixed h-screen w-60 top-0 left-0 z-30 transition-transform flex flex-col " +
          (isOpen ? "translate-x-0" : "-translate-x-full")
        }
        sx={{
          backgroundColor: "background",
        }}
      >
        <div
          sx={{
            backgroundColor: "background2",
          }}
          className="h-12 flex flex-row items-center justify-end flex-shrink-0"
        >
          <button
            title="Close Sidebar"
            onClick={close}
            className="h-full w-12 flex items-center justify-center"
            ref={closeButton}
          >
            <i className="bi-arrow-left text-3xl flex" />
          </button>
        </div>

        <div ref={buttonsParent} className="flex flex-col h-full">
          {children}
        </div>

        <div ref={buttonsParent2} className="flex flex-row p-2 justify-between">
          <a
            href="mailto:reid-cole@outlook.com"
            target="_blank"
            rel="noreferrer noopener"
            title="Email"
          >
            <i className="bi-envelope-fill flex text-2xl p-2" />
          </a>

          <a
            href="https://www.linkedin.com/in/reid-cole/"
            target="_blank"
            rel="noreferrer noopener"
            title="LinkedIn"
          >
            <i className="bi-linkedin flex text-2xl p-2" />
          </a>

          <a
            href="https://github.com/ReidCole"
            target="_blank"
            rel="noreferrer noopener"
            title="GitHub"
          >
            <i className="bi-github flex text-2xl p-2" />
          </a>

          <button onClick={openThemeDropdown}>
            <i className="bi-moon-stars-fill flex text-2xl p-2" />
          </button>

          <ThemeDropdown
            dropdownState={themeDropdownState}
            onSelectTheme={onSelectTheme}
            className="bottom-14 left-48 z-40"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
