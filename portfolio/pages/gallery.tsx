import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { styled } from "@styles/stitches";
import { convertTransitionToAnimationOptions } from "framer-motion/types/animation/utils/transitions";
import Head from "next/head";

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

const CommandCenter: FC<CommandCenterTypes> = ({ onCloseHandler }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleKeyboardEvents = (e: KeyboardEvent) => {
    const elementArray = getAllElementsInsideModal(modalRef.current),
      lastElement = elementArray[elementArray.length - 1];

    const tabKey = e.key === "Tab";
    const escapeKey = e.key === "Escape";
    const shiftKey = e.shiftKey;

    const buttonOpener = document.getElementById("open-cmd");

    if (shiftKey && tabKey && e.target === elementArray[0]) {
      e.preventDefault();
      (lastElement as HTMLElement).focus();
    }

    if (tabKey && !shiftKey && lastElement === e.target) {
      e.preventDefault();
      console.log("last Key");
      (elementArray[0] as HTMLElement).focus();
    }
    if (escapeKey) {
      buttonOpener?.focus();
      onCloseHandler();
    }
  };

  useEffect(() => {
    const elementArray = getAllElementsInsideModal(modalRef.current);
    (elementArray[0] as HTMLElement).focus();
    document.addEventListener("keydown", handleKeyboardEvents);
    return () => {
      document.removeEventListener("keydown", handleKeyboardEvents);
    };
  }, []);

  if (typeof window !== "undefined") {
    return (
      document &&
      renderPortal(
        <ModalBody ref={modalRef}>
          <CmdSearch
            name="search"
            placeholder="What the fuck are you searching for?"
          />
        <OptionsContainer>

          <GroupHeading>Navigation</GroupHeading>
          <CmdOptions>Go to Home</CmdOptions>
          <CmdOptions>Go to Back</CmdOptions>
          <GroupHeading>Actions</GroupHeading>
          <CmdOptions>option 3</CmdOptions>
          <CmdOptions>option 4</CmdOptions>
          <CmdOptions>option 5</CmdOptions>
          <CmdOptions>option 5</CmdOptions>
          <CmdOptions>option 5</CmdOptions>
          <CmdOptions>option 5</CmdOptions>
        </OptionsContainer>
        </ModalBody>
      )
    );
  }
  return <></>;
};

const OptionsContainer = styled("div", {
  height:"calc(340px - 3.2rem)",
  overflow:"auto",
  padding:"0 10px"
})

const GroupHeading = styled("p", {
  color:"$gray7",
  fontFamily:"$para",
  fontSize:"0.875rem",
})

const CmdOptions = styled("button", {
  border:0,
  display:"flex",
  alignItems:"center",
  fontFamily:"$para",
  width:"100%",
  height:"3rem",
  background:"white",
  color:"$gray8",
  padding:"0 10px",
  borderRadius:"5px",
  "&:focus, &:focus-within, &:focus-visible, &:hover":{
    background:"$gray2",
    outline:0
  }
})

const CmdSearch = styled("input", {
  display:"block",
  width:"100%",
  height:"3rem",
  padding:"0 1rem",
  border:0,
  fontFamily:"$para",
})

const ModalBody = styled("div", {
  position: "fixed",
  top: "20%",
  left: "50%",
  boxShadow: "0 16px 70px rgba(0,0,0,.2)",
  width: "640px",
  height: "340px",
  borderRadius: "0.5rem",
  transformOrigin: "50%",
  transform: "translateX(-50%)",
  border: "1px solid #e9ecef",
  // padding: "1rem",
});

const Gallery = () => {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
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
