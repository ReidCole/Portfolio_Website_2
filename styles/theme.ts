import type { Theme } from "theme-ui";

export const theme: Theme = {
  config: {
    initialColorModeName: "apple",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    background: "black",
    text: "lime",
    primary: "red",
    modes: {
      banana: {
        background: "rgb(0, 0, 40)",
        text: "cyan",
        primary: "purple",
      },
      carrot: {
        text: "black",
        background: "orange",
        primary: "red",
      },
    },
  },
  breakpoints: ["400px", "600px", "800px"],
};
