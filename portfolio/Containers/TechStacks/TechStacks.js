import React from "react";
import classes from "./TechStacks.module.css";
import { motion } from "framer-motion";

const scroll = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeOut",
    },
  },
};

function TechStacks() {
  const rowOne = ["react", "node", "js"];
  const rowTwo = ["redux", "mongo", "firebase"];

  return (
    <div className={classes.root}>
      <div className={classes.one}>
        <h4 style={{ fontSize: "15px" }}> Stack that I work with </h4>
        <div className={classes.stacks}>
          {rowOne.map(function (e) {
            return (
              <div style={{ textAlign: "center", color: "#989898" }}>
                <img
                  key={e}
                  className={classes.imgs}
                  src={`/${e}.png`}
                  width="2rem"
                  height="2rem"
                />
                <h4 style={{ fontSize: "15px" }}>{e}</h4>
              </div>
            );
          })}
        </div>
        <div className={classes.stacks}>
          {rowTwo.map(function (e) {
            return (
              <div style={{ textAlign: "center", color: "#989898" }}>
                <img
                  key={e}
                  className={classes.imgs}
                  src={`/${e}.png`}
                  width="2rem"
                  height="2rem"
                />
                <h4 style={{ fontSize: "15px" }}>{e}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.two}>
        Ready to craft meaningful digital experiences.
      </div>
    </div>
  );
}

export default TechStacks;
