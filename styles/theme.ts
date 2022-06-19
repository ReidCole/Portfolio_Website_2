import type { Theme } from "theme-ui";

export const theme: Theme = {
  config: {
    initialColorModeName: "apple",
  },
  fonts: {
    code: "monospace",
    body: "Arial",
  },
  colors: {
    background: "#1e1e1e",
    background2: "#252526",
    text: "#d4d4d4",
    subtext: "#a9a9a9",
    code_element: "#569cd6",
    code_bracket: "#808080",
    code_caret: "#aeafad",
    code_off_tab: "#2d2d2d",
    modes: {},
  },
  breakpoints: ["400px", "600px", "800px"],
};
