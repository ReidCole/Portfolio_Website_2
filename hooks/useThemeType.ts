import { useEffect, useState } from "react";
import { useColorMode } from "theme-ui";

const useThemeType = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [themeType, setThemeType] = useState<"dark" | "light">("dark");

  useEffect(() => {
    if (colorMode.toLowerCase().includes("light")) {
      setThemeType("light");
    } else {
      setThemeType("dark");
    }
  }, [colorMode]);

  return themeType;
};

export default useThemeType;
