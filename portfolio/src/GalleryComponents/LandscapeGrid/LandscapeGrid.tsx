import { keyframes, styled } from "@styles/stitches";
import React from "react";
import { resultFromUnsplash } from "src/constants";

const move = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const LandscapeGrid = () => {
  return (
    <LandscapeGridContainer>
      {resultFromUnsplash.results.map((info, index) => {
        return (
          <CardContainer>
            <BigImage src={info.urls.regular} />
            <SmallImage src={info.urls.regular} />
            <SmallImageWrapper></SmallImageWrapper>
            <ImagePlaceholder src={info.urls.regular} />
            <div>
              <StyledHeading>
                {info.description || info.alt_description}
              </StyledHeading>
              <StyledLinkAuthor href={info.user.portfolio_url}>
                {info.user.name}
              </StyledLinkAuthor>
            </div>
          </CardContainer>
        );
      })}
    </LandscapeGridContainer>
  );
};

const StyledLinkAuthor = styled("a", {
  color: "grey",
});

const StyledHeading = styled("h4", {
  color: "white",
  fontWeight: 400,
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
  zIndex: "-1",
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
  zIndex: -1,
  filter: "blur(30px)",
  animation: `${move} 10s infinite linear`,
  // clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
});

const ImagePlaceholder = styled("img", {
  width: "100%",
  height: "40%",
  backgroundColor: "white",
  // margin: "0 auto",
  position: "relative",
  zIndex: "3",
  display: "block",
});

const SmallImageWrapper = styled("div", {
  filter: "blur(30px)",
  top: "37%",
  left: "0%",
  position: "absolute",
});

const CardContainer = styled("div", {
  height: "400px",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "transparent",
  padding: "1rem",
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  fontFamily: "Haas",
  gap: "1rem",
  boxShadow: "0 30px 60px rgba(0, 0, 0, 0.12)",
});

const LandscapeGridContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "40px",
  padding: "0 40px",
});

export default LandscapeGrid;
