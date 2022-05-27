import { styled } from "@styles/stitches";
import React from "react";

const BlogHeader = (props) => {
  const { category, publishedAt } = props.frontmatter;
  console.log(props);
  return (
    <HeaderContainer>
      <StyledImage src="https://images.unsplash.com/photo-1592495981488-073153776d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2112&q=80" />
      <StyledHeading>{props.heading}</StyledHeading>
      <MetaData>
        {category}
        <MetaDataSeprator /> {publishedAt}
      </MetaData>
    </HeaderContainer>
  );
};

const MetaData = styled("p", {
  fontFamily: "$heading",
  textTransform: "uppercase",
  fontSize: "1.2rem",
  display: "flex",
  alignItems: "center",
  gap: "15px",
});

const MetaDataSeprator = styled("span", {
  width: "40px",
  height: "3px",
  backgroundColor: "green",
});

const StyledHeading = styled("h1", {
  fontSize: "5rem",
  fontFamily: "$heading",
  color: "rgb(0 6 12)",
  position: "relative",
  zIndex: 3,
  marginTop: "3rem",
  mixBlendMode: "color-burn",
});

const HeaderContainer = styled("div", {
  position: "relative",
  marginBottom: "160px",
});

const StyledImage = styled("img", {
  position: "absolute",
  top: "15px",
  right: "70px",
  zIndex: 2,
  height: 300,
});

export default BlogHeader;
