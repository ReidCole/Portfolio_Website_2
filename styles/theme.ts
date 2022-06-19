import type { Theme } from "theme-ui";

export const theme: Theme = {
  config: {
    initialColorModeName: "dark",
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
    code_button_hover: "#363737",
    code_dropdown_bg: "#303031",
    code_dropdown_hover: "#094771",
    modes: {
      light: {
        background: "#ffffff",
        background2: "#f3f3f3",
        text: "#000000",
        subtext: "#818181",
        code_element: "#800000",
        code_bracket: "#800000",
        code_caret: "#000000",
        code_off_tab: "#ececec",
        code_button_hover: "#e1e1e1",
        code_dropdown_bg: "#ffffff",
        code_dropdown_hover: "#0060c0",
      },
      solarizedDark: {
        background: "#002b36",
        background2: "#004052",
        text: "#d6dbdb",
        subtext: "#a3acae",
        code_element: "#859900",
        code_bracket: "#586e75",
        code_caret: "#d30102",
        code_off_tab: "#004052",
        code_button_hover: "#1c4956",
        code_dropdown_bg: "#00212b",
        code_dropdown_hover: "#005a6f",
      },
    },
  },
  breakpoints: ["400px", "600px", "800px"],
};
