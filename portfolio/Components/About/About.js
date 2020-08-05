import React from "react";
import classes from "./About.module.css";
function About(props) {
    return (
        <div className={classes.root}>
            <h4 style={{ fontSize: "15px" }}>ABOUT ME</h4>
            <p className={classes.text}>
                {" "}
                Currently, on my second year of Computer Science Bachelor and learning new
                technologies.{" "}
                <span className={classes.love}>I build apps with beautiful UI/UX.</span> Doing what
                I absolutely LOVE. Looking for internship opportunities.
            </p>
        </div>
    );
}

export default About;
