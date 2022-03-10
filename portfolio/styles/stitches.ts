import { createStitches } from "@stitches/react";

export const { styled, css, getCssText, keyframes } = createStitches({
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",

      // grey colors that I copied from uiw.tf
      gray0: "#f8f9fa",
      gray1: "#f4f5f6",
      gray2: "#e9ecef",
      gray3: "#dee2e6",
      gray4: "#ced4da",
      gray5: "#adb5bd",
      gray6: "#868e96",
      gray7: "#495057",
      gray8: "#343a40",
      gray9: "#212529",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
    media: {
      bp1: "(max-width: 640px)",
      bp2: "(max-width: 768px)",
      bp3: "(max-width: 1024px)",
    },
    fonts: {
      heading: "Haas",
      para:"'Inter', sans-serif"
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
