import React from "react";
import Head from "next/head";
import Projects from "../Containers/Projects/Projects";
import Intro from "../Containers/Intro/Intro.tsx";
import Header from "../Components/Header/Header";
import About from "../Containers/About/About";
import TechStacks from "../Containers/TechStacks/TechStacks";
import Info from "../Containers/Info/Info";
import { keyframes, styled } from "@stitches/react";
import { motion } from "framer-motion";

// @keyframes move {
//   0% {
//     offset-distance: 0%;
//   }
//   100% {
//     offset-distance: 100%;
//   }
// }

const move = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const GreenCircle = styled(motion.img, {
  position: "absolute",
  top: "-3%",
  left: "40%",
  width: "auto",
  filter: "saturate(250%)",
  height: "1000px",
  animation: `${move} 10000ms infinite linear`,
  // border: "1px solid",
});

const NonBlur = styled(motion.img, {
  position: "absolute",
  top: "5%",
  left: "45%",
  height: "15%",
  width: "auto",
  transform: "rotate(90deg)",
  filter: "blur(40px) saturate(150%)",
  // filter: " saturate(250%)",
  mixBlendMode: "color-burn",
  pointerEvents: "none",
  objectFit: "cover",
  borderRadius: "2rem",
  // opacity: 0.5,
});

// mix blend mode

const MainContainer = styled(motion.div, {
  position: "relative",
  overflow: "hidden",
});

export default class Home extends React.Component {
  state = {
    index: "head",
  };
  handleShow = (i) => {
    this.setState({ index: i });
    this.refs[i].scrollIntoView({ block: "end", behavior: "smooth" });
  };
  render() {
    let nav = null;
    if (typeof window !== "undefined") {
      nav = <Header handleShow={this.handleShow} />;
    }
    return (
      <MainContainer>
        <Head>
          <link rel="shortcut icon" href="/green.svg" />
          <title>Tanvesh</title>
        </Head>
        {nav}
        <Intro />
        <div ref="work">
          <Projects />
        </div>
        <div ref="about">
          <About />
        </div>
        <TechStacks />
        <div ref="contact">
          <Info />
        </div>
        <div style={{ height: "2rem", width: "100%" }}></div>
        <GreenCircle src="/blur.png" />
        <NonBlur src="/non_blur.png" />
      </MainContainer>
    );
  }
}
