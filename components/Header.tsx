/** @jsxImportSource theme-ui */
import { useContext } from "react";
import { ScrollContext } from "../context/ScrollContext";

const Header = () => {
  const scroll = useContext(ScrollContext);

  return (
    <>
      <header
        sx={{
          backgroundColor: "background2",
          borderColor: "border",
        }}
        className="h-12 fixed w-full top-0 left-0 z-10 shadow-md"
      >
        stuff
      </header>
      <div className="h-12" />
    </>
  );
};

export default Header;
