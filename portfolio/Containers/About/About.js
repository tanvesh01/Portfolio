import React from "react";
import classes from "./About.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const scroll = {
    hidden: {
        y: "20%",
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

function About(props) {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <div ref={ref} className={classes.root}>
            {inView ? (
                <motion.div initial="hidden" animate="visible" variants={scroll}>
                    <h4 style={{ fontSize: "15px" }}>ABOUT ME</h4>
                    <p className={classes.text}>
                        Currently a Frontend Engineer at{" "}
                        <a href="https://www.wrky.ai/" target="_blank">
                            {" "}
                            Wrky
                        </a>{" "}
                        <br />
                        On my third year of Computer Science Bachelor and learning new
                        technologies. <br />
                        <span className={classes.love}>
                            I build apps with beautiful UI/UX.
                        </span>{" "}
                        Doing what I absolutely love.
                    </p>{" "}
                </motion.div>
            ) : null}
        </div>
    );
}

export default About;
