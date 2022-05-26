import { styled } from "@styles/stitches";

const H2Heading = styled("h2", {
  marginTop: "96px",
  marginBottom: "32px",
  fontFamily: "$heading",
  fontSize: "2rem",
  color: "#252a2f",
  variants: {
    type: {
      h2: {},
    },
  },
});

H2Heading.defaultProps = {
  type: "h2",
};

const H3Heading = styled("h3", {
  marginTop: "96px",
  marginBottom: "32px",
  fontFamily: "$heading",
  fontSize: "1.5625rem",
  color: "#252a2f",
  variants: {
    type: {
      h3: {},
    },
  },
});

H3Heading.defaultProps = {
  type: "h3",
};

export const BlogHeadings = (type: "h2" | "h3") => {
  if (type === "h2") {
    return H2Heading;
  }
  return H3Heading;
};
