import React from "react";
import classes from "./Intro.module.css";

const Intro = (props) => {
    return (
        <div className={classes.hi}>
            <img src="/images/green.svg" alt="green" className={classes.green} />
            <h1 className={classes.heading}>
                Hey! I’m Tanvesh, a India-Based Full-Stack Developer.
            </h1>
        </div>
    );
};

export default Intro;
