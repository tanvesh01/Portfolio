import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { styled } from "@styles/stitches";
import { convertTransitionToAnimationOptions } from "framer-motion/types/animation/utils/transitions";

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
          <input
            name="search"
            placeholder="What the fuck are you searching for?"
          />
          <button>option 1</button>
          <button>option 2</button>
          <button>option 3</button>
          <button>option 4</button>
          <button>option 5</button>
        </ModalBody>
      )
    );
  }
  return <></>;
};

const Gallery = () => {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  return (
    <div>
      <button id="open-cmd" onClick={() => setIsCmdOpen(!isCmdOpen)}>
        Open
      </button>
      {isCmdOpen && (
        <CommandCenter onCloseHandler={() => setIsCmdOpen(false)} />
      )}
    </div>
  );
};

// const CmdSearch = styled("")

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
  padding: "1rem",
});

export default Gallery;
