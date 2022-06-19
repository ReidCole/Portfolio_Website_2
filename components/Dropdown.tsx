/** @jsxImportSource theme-ui */
import { RefObject, useEffect, useRef } from "react";
import { DropdownState } from "../hooks/useDropdownState";

type Props = {
  state: DropdownState;
  options: DropdownOption[];
  className?: string;
};

type DropdownOption = {
  text: string;
  onClick: () => void;
};

const Dropdown: React.FC<Props> = ({ state, options, className }) => {
  const firstItem = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (firstItem.current === null || !state.isOpen) return;
    console.log("open effect");
    firstItem.current.focus();
  }, [state.isOpen]);

  return (
    <div
      sx={{
        backgroundColor: "code_dropdown_bg",
      }}
      className={
        "py-1 rounded-lg absolute flex flex-col shadow-lg " +
        (state.isOpen ? "" : "hidden ") +
        className
      }
    >
      {options.map((option, index) => (
        <DropdownButton
          key={index}
          onClick={option.onClick}
          buttonRef={index === 0 ? firstItem : undefined}
        >
          {option.text}
        </DropdownButton>
      ))}
    </div>
  );
};

export default Dropdown;

type ButtonProps = {
  children: React.ReactNode;
  buttonRef?: RefObject<HTMLButtonElement>;
  onClick?: () => void;
};

const DropdownButton: React.FC<ButtonProps> = ({ children, buttonRef: ref, onClick }) => {
  return (
    <button
      className="px-4 py-1"
      sx={{
        ":hover": {
          backgroundColor: "code_dropdown_hover",
          color: "#ffffff",
        },
      }}
      ref={ref}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
