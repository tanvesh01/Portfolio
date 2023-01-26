import React from "react";
import classes from "./About.module.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className={classes.root}>
      <motion.div>
        <h4 style={{ fontSize: "15px" }}>ABOUT ME</h4>
        <p className={classes.text}>
          Currently a Frontend Engineer at{" "}
          <a href="https://followalice.com/" target="_blank">
            FollowAlice
          </a>
          <br />
          On my Last year of Computer Science Bachelor and learning new
          technologies. <br />
          <span className={classes.love}>
            I build apps with beautiful UI/UX.
          </span>{" "}
          Doing what I absolutely love.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
