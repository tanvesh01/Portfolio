import { styled } from "@styles/stitches";
import { HTMLMotionProps, motion } from "framer-motion";
import React, { useRef } from "react";

const staggerProps: HTMLMotionProps<"div"> = {
  initial: "hidden",
  animate: "visible",
  variants: {
    visible: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  },
};

const Intro = () => {
  let WavyHead = null;

  if (typeof window !== "undefined") {
    WavyHead = (
      <>
        {window.screen.width <= 640 && (
          <WavyHand
            style={{ display: "block" }}
            animate={{ rotate: [-10, 30], opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src="/hand_wave.png"
            alt="Hello"
          />
        )}
        Hello, I’m Tanvesh
        {window.screen.width > 640 && (
          <WavyHand
            animate={{ rotate: [-10, 30], opacity: 1 }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src="/hand_wave.png"
            alt="Hello"
            mode="desktop"
          />
        )}
      </>
    );
  }

  return (
    <MainContainer {...staggerProps}>
      <IntroHeading>{WavyHead}</IntroHeading>
      <IntroHeading>I am a Frontend Engineer</IntroHeading>
      <IntroHeading>
        Currently based in India. Doing what I absolutely love.
      </IntroHeading>
    </MainContainer>
  );
};

const WavyHand = styled(motion.img, {
  display: "inline-block",
  height: "4rem",
  marginBottom: "12px",
  transformOrigin: "75% 80%",
  variants: {
    mode: {
      desktop: {
        marginBottom: 0,
        marginLeft: 20,
      },
    },
  },
});

const StyledImage = styled("img", {
  position: "absolute",
  transformOrigin: "left",
});

const IntroHeading = styled("h1", {
  position: "relative",
  fontSize: `clamp(
    2.5rem,
    8vw - 1.25rem,
    4rem
  )`,
  margin: "0 0 1rem",
  zIndex: 90,
});

const MainContainer = styled(motion.div, {
  position: "relative",

  // Base Styles
  padding: "5rem 0 0 5rem",
  fontFamily: "$heading",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "80vh",
  "@media(max-width: 640px)": {
    minHeight: "0",
    padding: "8rem 0 0 2rem",
  },
  "@bp1": {
    // Styles for bp1
  },
});

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = ({ children: text }: { children: string }) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "100%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  // Create ["tanvesh", "sarve"]
  const splitWords = text.split(" ");
  console.log(splitWords);

  const words: string[][] = [];

  // creates [["t", "a", "n"] ]
  splitWords.forEach((word) => {
    words.push(word.split(""));
  });

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });
  console.log(words);

  // Get the tag name from tagMap

  // return <>{text}</>;
  return (
    <React.Fragment>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <span
            key={index}
            // style={{ display: "block" }}
          >
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </React.Fragment>
  );
};

export default Intro;
