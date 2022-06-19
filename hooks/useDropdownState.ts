import { useEffect, useState } from "react";

export type DropdownState = {
  isOpen: boolean;
};

function useDropdownState(): [DropdownState, () => void] {
  const [isOpen, setIsOpen] = useState(false);

  function onClick() {
    close();
  }

  function open() {
    window.addEventListener("click", onClick, true);
    setIsOpen(true);
  }

  function close() {
    window.removeEventListener("click", onClick, true);
    setIsOpen(false);
  }

  const state: DropdownState = {
    isOpen,
  };

  return [state, open];
}

export default useDropdownState;
