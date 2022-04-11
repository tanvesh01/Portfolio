import { keyframes, styled } from "@styles/stitches";
import React from "react";
import { resultFromUnsplash } from "src/constants";
import { StyledLinksContainer } from "./components";

const move = keyframes({
  "0%": { transform: "rotate(60deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const LandscapeGrid = () => {
  return (
    <LandscapeGridContainer>
      {resultFromUnsplash.results.map((info, index) => {
        return (
          <CardContainer>
            <Texture />
            <BigImage src={info.urls.regular} />
            <SmallImage src={info.urls.regular} />
            <SmallImageWrapper></SmallImageWrapper>
            <ImagePlaceholder src={info.urls.regular} />
            <div>
              <StyledHeading>
                {info.description || info.alt_description}
              </StyledHeading>
              <StyledLinksContainer>
                <StyledLinkAuthor href={info.user.portfolio_url}>
                  {info.user.name}
                </StyledLinkAuthor>
              </StyledLinksContainer>
            </div>
            <StyledButton>
              <TextContent> explore</TextContent>
              <ImageInsideButton src={info.urls.regular} />
            </StyledButton>
          </CardContainer>
        );
      })}
    </LandscapeGridContainer>
  );
};

const TextContent = styled("p", {
  zIndex: 5,
  color: "white",
  position: "relative",
});

const StyledButton = styled("button", {
  padding: "12px 16px",
  position: "relative",
  overflow: "hidden",
  zIndex: 5,
  filter: "grayscale(1)",
  fontFamily: "Haas",
  color: "white",
});

const ImageInsideButton = styled("img", {
  position: "absolute",
  left: 0,
  top: "40px",
  objectFit: "cover",
  width: "100%",
  height: "100%",
  filter: "blur(20px) brightness(10%) saturate(150%)",
  transform: "scale(2)",
});

const Texture = styled("div", {
  backgroundColor: "#DFDBE5",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 4,
  opacity: "0.3",
  mixBlendMode: "color-dodge",
});

const StyledLinkAuthor = styled("a", {
  color: "#e7e6e6",
  "&:hover": {
    color: "white",
  },
  "&::after": {
    content: "",
    display: "block",
    width: "100%",
    borderTop: "1px dashed white",
  },
});

const StyledHeading = styled("h4", {
  color: "white",
  fontWeight: 400,
  textTransform: "lowercase",
});

const BigImage = styled("img", {
  height: "60%",
  objectFit: "cover",
  transform: "rotate(90deg)",
  position: "absolute",
  top: "30%",
  left: 0,
  filter: "blur(30px) saturate(250%)",
  opacity: "0.9",
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
  zIndex: 6,
  filter: "blur(30px)",
  animation: `${move} 40s infinite linear`,
  // clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
});

const ImagePlaceholder = styled("img", {
  width: "100%",
  height: "auto",
  backgroundColor: "white",
  // margin: "0 auto",
  position: "relative",
  zIndex: "6",
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
