import React, { FC, useEffect, useRef, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { styled } from "@styles/stitches";
import { motion, LayoutGroup } from "framer-motion";
import { createApi } from "unsplash-js";
import Head from "next/head";
import {
  GithubIcon,
  TwitterFillIcon,
  LinkedInFillIcon,
  EmailOutlineIcon,
  HomeFillIcon,
  BackIcon,
} from "Components/Icons";

const renderPortal = (HTMLElement: React.ReactNode) =>
  ReactDOM.createPortal(
    HTMLElement,
    document.getElementById("modal") || document.body
  );

const getAllElementsInsideModal = (
  element: HTMLDivElement | null
): NodeListOf<Element> | [] => {
  return element
    ? element.querySelectorAll(
        [
          "a",
          "button:not([disabled])",
          "details",
          "input:not([readonly])",
          "select",
          "textarea",
          '[tabindex]:not([tabindex^="-"])',
        ].join(",")
      )
    : [];
};

interface CommandCenterTypes {
  onCloseHandler: () => void;
}

/*
  input array = 0 1 2 3 4
                  ------- 
                  0 1 2 3                


*/

const CommandCenter: FC<CommandCenterTypes> = ({ onCloseHandler }) => {
  const options = ["Go To Home", "Go To Back", "Github"];

  const cmdOptions = [
    {
      sectionName: "Navigation",
      options: [
        {
          indexForRef: 0,
          content: () => (
            <>
              <HomeFillIcon /> Go to Home
            </>
          ),
        },
        {
          indexForRef: 1,
          content: () => (
            <>
              <BackIcon /> Go Back
            </>
          ),
        },
      ],
    },
    {
      sectionName: "Socials",
      options: [
        {
          indexForRef: 2,
          content: () => (
            <>
              <GithubIcon /> GitHub
            </>
          ),
        },
        {
          indexForRef: 3,
          content: () => (
            <>
              <TwitterFillIcon /> Twitter
            </>
          ),
        },
      ],
    },
  ];

  const modalRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef({
    selectedOptionIndex: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [number, setNumber] = useState(false);

  const handleKeyboardEvents = (e: KeyboardEvent) => {
    const elementArray = getAllElementsInsideModal(modalRef.current),
      lastElement = elementArray[elementArray.length - 1],
      lastOptionIndex = elementArray.length - 1;
    // console.log(elementArray);
    const tabKey = e.key === "Tab";
    const escapeKey = e.key === "Escape";
    const shiftKey = e.shiftKey;

    const buttonOpener = document.getElementById("open-cmd");

    if (e.key === "ArrowDown" || tabKey) {
      e.preventDefault();
      if (indexRef.current.selectedOptionIndex === elementArray.length - 1) {
        elementArray[indexRef.current.selectedOptionIndex].ariaSelected =
          "false";
        elementArray[1].ariaSelected = "true";
        elementArray[1].scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
        indexRef.current.selectedOptionIndex = 1;
        setSelectedIndex(indexRef.current.selectedOptionIndex);
      } else {
        elementArray[indexRef.current.selectedOptionIndex].ariaSelected =
          "false";
        elementArray[indexRef.current.selectedOptionIndex + 1].ariaSelected =
          "true";
        elementArray[indexRef.current.selectedOptionIndex + 1].scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
        indexRef.current.selectedOptionIndex =
          indexRef.current.selectedOptionIndex + 1;
        setSelectedIndex(indexRef.current.selectedOptionIndex);
      }
    }
    if (e.key === "ArrowUp" || (shiftKey && tabKey)) {
      e.preventDefault();
      console.log(shiftKey, tabKey);

      if (indexRef.current.selectedOptionIndex === 1) {
        elementArray[indexRef.current.selectedOptionIndex].ariaSelected =
          "false";
        elementArray[lastOptionIndex].ariaSelected = "true";
        elementArray[lastOptionIndex].scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
        indexRef.current.selectedOptionIndex = lastOptionIndex;
        setSelectedIndex(indexRef.current.selectedOptionIndex);
      } else {
        elementArray[indexRef.current.selectedOptionIndex].ariaSelected =
          "false";
        elementArray[indexRef.current.selectedOptionIndex - 1].ariaSelected =
          "true";
        elementArray[indexRef.current.selectedOptionIndex - 1].scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
        indexRef.current.selectedOptionIndex =
          indexRef.current.selectedOptionIndex - 1;
        setSelectedIndex(indexRef.current.selectedOptionIndex);
      }
    }

    // if (shiftKey && tabKey && e.target === elementArray[0]) {
    //   e.preventDefault();
    //   (lastElement as HTMLElement).focus();
    // }

    // if (tabKey && !shiftKey && lastElement === e.target) {
    //   e.preventDefault();
    //   console.log("last Key");
    //   (elementArray[0] as HTMLElement).focus();
    // }
    if (escapeKey) {
      e.preventDefault();
      buttonOpener?.focus();
      onCloseHandler();
    }
  };

  const handleHoverEvents = (e) => {
    const elementArray = getAllElementsInsideModal(modalRef.current);

    if (
      e.target.tagName === "BUTTON" &&
      elementArray[indexRef.current.selectedOptionIndex].ariaSelected
    ) {
      elementArray[indexRef.current.selectedOptionIndex].ariaSelected = "false";
      e.target.ariaSelected = "true";
      indexRef.current.selectedOptionIndex = Number(e.target.dataset.index) + 1;
      setSelectedIndex(indexRef.current.selectedOptionIndex);
    }
  };

  useEffect(() => {
    const elementArray = getAllElementsInsideModal(modalRef.current);
    (elementArray[0] as HTMLElement).focus();
    document.addEventListener("keydown", handleKeyboardEvents);
    document.addEventListener("mouseover", handleHoverEvents);
    return () => {
      document.removeEventListener("keydown", handleKeyboardEvents);
      document.removeEventListener("mouseover", handleHoverEvents);
    };
  }, []);

  if (typeof window !== "undefined") {
    return (
      <React.Fragment>
        <Overlay />
        <ModalBody ref={modalRef}>
          <CmdSearch
            autoFocus={true}
            // onBlur={(e) => e.target.focus()}
            name="search"
            autoComplete="off"
            placeholder="What are you searching for?"
          />
          {/* <button onClick={() => setNumber(!number)}>change number</button> */}
          <Divider />
          <OptionsContainer>
            <LayoutGroup id="top5">
              {/* {options.map((item, index) => {
                return (
                  <CmdOptions
                    key={index}
                    data-index={index}
                    aria-selected={index === 0 ? "true" : false}
                  >
                    <p>{item}</p>
                    {selectedIndex - 1 === index ? (
                      <Underline
                        layoutId="underline"
                        initial={{ zIndex: "98" }}
                        animate={{ zIndex: 98 }}
                      />
                    ) : null}
                  </CmdOptions>
                );
              })} */}
              {cmdOptions.map(({ sectionName, options }, index) => {
                return (
                  <Fragment>
                    <GroupHeading>{sectionName}</GroupHeading>
                    {options.map(({ content, indexForRef }, index) => {
                      return (
                        <CmdOptions
                          key={indexForRef}
                          data-index={indexForRef}
                          aria-selected={indexForRef === 0 ? "true" : false}
                        >
                          <p>{content()}</p>
                          {selectedIndex - 1 === indexForRef ? (
                            <Underline
                              layoutId="underline"
                              initial={{ zIndex: "98" }}
                              animate={{ zIndex: 98 }}
                            />
                          ) : null}
                        </CmdOptions>
                      );
                    })}
                  </Fragment>
                );
              })}
            </LayoutGroup>
            {/* <ul>
              {options.map((item, index) => {
                return (
                  <li
                    key={item}
                    
                  >
                    {item}
                    {selectedIndex === index ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                  </li>
                );
              })}
            </ul> */}

            {/* <LayoutGroup id="top5">
                <GroupHeading>Navigation</GroupHeading>
                <CmdOptions aria-selected="true">
                  <HomeFillIcon /> Go to Home
                </CmdOptions>
                <CmdOptions>
                  <BackIcon /> Go to Back
                </CmdOptions>
                <GroupHeading>Actions</GroupHeading>
                {number ? (
                  <Underline
                    className="underline"
                    layoutId="underline"
                    transition={spring}
                  ></Underline>
                ) : null}
                <CmdOptions>
                  <GithubIcon /> Github
                </CmdOptions>
                <CmdOptions>
                  <TwitterFillIcon /> Twitter
                </CmdOptions>
                {!number ? (
                  <Underline
                    className="underline"
                    layoutId="underline"
                    transition={spring}
                  ></Underline>
                ) : null}
                <CmdOptions>
                  <LinkedInFillIcon /> LinkedIn
                </CmdOptions>
                <CmdOptions>
                  <EmailOutlineIcon /> Email Me
                </CmdOptions>
              </LayoutGroup> */}
          </OptionsContainer>
        </ModalBody>
      </React.Fragment>
    );
  }
  return <></>;
};

const Underline = styled(motion.div, {
  "--accent": "#8855ff",
  position: "absolute",
  left: "0",
  right: 0,
  height: "100%",
  // width: "200px",
  borderRadius: "5px",
  background: "white",
  // background: "var(--accent)",
});

const Divider = styled("hr", {
  border: "1px solid white",
  borderWidth: "1px 0 0 0",
});

const OptionsContainer = styled("div", {
  height: "calc(340px - 3.2rem)",
  overflow: "auto",
  padding: "0 10px",
  paddingTop: "10px",
});

const GroupHeading = styled("p", {
  color: "$gray7",
  fontFamily: "$para",
  fontSize: "0.875rem",
});

const CmdOptions = styled("button", {
  position: "relative",

  border: 0,
  display: "flex",
  alignItems: "center",
  fontFamily: "$para",
  width: "100%",
  height: "2.5rem",
  background: "#eeeff3",
  color: "#333333",
  padding: "0 10px",
  borderRadius: "5px",

  "& p": {
    fontSize: "0.8rem",
    zIndex: "99",
  },

  // "&:focus, &:focus-within, &:focus-visible, &:hover": {
  //   background: "white",
  //   outline: 0,
  //   boxShadow: "rgb(224 227 235) 0px 2px 15px 2px",
  // },
  // '&[aria-selected="true"]': {
  //   boxShadow: "rgb(224 227 235) 0px 2px 15px 2px",
  //   background: "white",
  //   outline: 0,
  //   zIndex: 1000,
  // },
});

const CmdSearch = styled("input", {
  display: "block",
  width: "100%",
  height: "3rem",
  padding: "0 1rem",
  border: 0,
  fontSize: "1.1rem",
  fontFamily: "$para",
  background: "inherit",
  borderRadius: "var(--inner-radius)",
  "&:focus, &:focus-within, &:focus-visible, &:hover": {
    outline: 0,
  },
});

const Overlay = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  background: "rgb(217 220 227 / 59%)",
});

const ModalBody = styled("div", {
  "--inner-radius": "10px",
  "--border-width": "9px",
  position: "fixed",
  top: "20%",
  left: "50%",
  boxShadow: "rgb(208 211 221) 0px 0px 50px 20px",
  width: "640px",
  height: "367px",
  borderRadius: "calc(var(--inner-radius) + var(--border-width))",
  transformOrigin: "50%",
  transform: "translateX(-50%)",
  border: "9px solid #E2E6EE",
  zIndex: "100",
  background: "#EDEFF3",
  // padding: "1rem",
});

// export const getServerSideProps = async () => {
//   const api = createApi({
//     // Don't forget to set your access token here!
//     // See https://unsplash.com/developers
//     accessKey: "Cm4qYkwUqyC9KkcVNwPuxa3OmBSVvZIYD2-M9I6JAZ0",
//   });

//   let images;

//   const result = await api.search.getPhotos({
//     query: "landscapes",
//     orientation: "landscape",
//   });
//   // .then((result) => {
//   //   console.log(result);
//   //   images = result;
//   // })
//   // .catch(() => {
//   //   console.log("something went wrong!");
//   // });
//   // console.log(images, "images");
//   return {
//     props: { images: result.response }, // will be passed to the page component as props
//   };
// };

const Gallery = () => {
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Gallery</title>
      </Head>
      <button id="open-cmd" onClick={() => setIsCmdOpen(!isCmdOpen)}>
        Open
      </button>
      {isCmdOpen && (
        <CommandCenter onCloseHandler={() => setIsCmdOpen(false)} />
      )}
    </div>
  );
};

export default Gallery;
