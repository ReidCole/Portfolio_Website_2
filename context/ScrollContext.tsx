import React, { createContext, FC, ReactNode, useEffect, useState } from "react";

export const ScrollContext = createContext<number>(0);

type Props = {
  children: ReactNode;
};
export const ScrollProvider: FC<Props> = ({ children }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function onScroll() {
      // console.log(window.scrollY);
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>;
};
