import React from "react";
import { DropdownState } from "../hooks/useDropdownState";
import Dropdown from "./Dropdown";

type Props = {
  dropdownState: DropdownState;
  onSelectTheme: (theme: string) => void;
  className?: string;
};

const ThemeDropdown: React.FC<Props> = ({ dropdownState, onSelectTheme, className = "" }) => {
  return (
    <Dropdown
      className={className}
      state={dropdownState}
      options={[
        {
          text: "Dark (Default)",
          onClick: () => onSelectTheme("dark"),
        },
        {
          text: "Light",
          onClick: () => onSelectTheme("light"),
        },
        {
          text: "Solarized Dark",
          onClick: () => onSelectTheme("solarizedDark"),
        },
        {
          text: "Dracula",
          onClick: () => onSelectTheme("draculaDark"),
        },
      ]}
    />
  );
};

export default ThemeDropdown;
