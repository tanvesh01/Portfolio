import { keyframes, styled } from "@styles/stitches";
import React from "react";
import { resultFromUnsplash } from "src/constants";

const LandscapeGrid = () => {
  return (
    <LandscapeGridContainer>
      {resultFromUnsplash.results.map((info, index) => {
        return (
          <CardContainer>
            <BigImage src={info.urls.regular} />
            <SmallImage src={info.urls.regular} />
            <SmallImageWrapper></SmallImageWrapper>
            <ImagePlaceholder />
          </CardContainer>
        );
      })}
    </LandscapeGridContainer>
  );
};

const move = keyframes({
  "0%": { transform: "rotate(0deg)", scale: "1" },
  "100%": { transform: "rotate(360deg)", scale: "1.3" },
});

const BigImage = styled("img", {
  height: "60%",
  objectFit: "cover",
  transform: "rotate(90deg)",
  position: "absolute",
  top: "30%",
  left: 0,
  filter: "blur(30px) saturate(250%)",
  opacity: "0.7",

  animation: `${move} 50s infinite linear`,
});

const SmallImage = styled("img", {
  mixBlendMode: "color-burn",
  objectFit: "cover",
  //   width: "100%",
  //   height: "50%",
  width: "100%",
  height: "63%",
  position: "absolute",
  top: "37%",
  left: "0%",
  filter: "blur(30px)",
  zIndex: 2,
  animation: `${move} 10s infinite linear`,
  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
});

const ImagePlaceholder = styled("div", {
  width: "90%",
  height: "40%",
  backgroundColor: "white",
  margin: "0 auto",
  position: "relative",
  zIndex: "3",
});

const SmallImageWrapper = styled("div", {
  filter: "blur(30px)",
  top: "37%",
  left: "0%",
  position: "absolute",
});

const CardContainer = styled("div", {
  height: "500px",
  border: "1px solid grey",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "transparent",
});

const LandscapeGridContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "40px",
  padding: "0 40px",
});

export default LandscapeGrid;
