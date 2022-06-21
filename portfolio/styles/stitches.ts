import { createStitches } from "@stitches/react";

export const { styled, css, getCssText, keyframes } = createStitches({
  theme: {
    media: {
      bp1: "(max-width: 640px)",
      bp2: "(max-width: 768px)",
      bp3: "(max-width: 1024px)",
    },
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
      primaryBlue: "#1b5aef",
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
    breakpoints: {
      $sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
      $md: (rule) => `@media (min-width: 1024px) { ${rule} }`,
      $lg: (rule) => `@media (min-width: 1280px) { ${rule} }`,
    },
    fonts: {
      heading: "Haas",
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
