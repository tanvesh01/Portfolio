import React from "react";
import classes from "./Intro.module.css";

const Intro = (props) => {
  return (
    <div className={classes.hi}>
      <img src="/green.svg" alt="green" className={classes.green} />
      <h1 className={classes.heading}>
        Hey! I’m Tanvesh, a India-Based Frontend Engineer.
      </h1>
    </div>
  );
};

export default Intro;
