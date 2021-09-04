import React from "react";
import classes from "./Info.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const scroll = {
    hidden: {
        y: "30%",
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

function Info(props) {
    const c = [
        { label: "Github", url: "https://github.com/tanvesh01" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/tanvesh01/" },
        { label: "Twitter", url: "https://twitter.com/Sarve___tanvesh" },
        { label: "@mail", url: "mailto:sarvetanvesh01@gmail.com" },
        {
            label: "Resume",
            url: "https://drive.google.com/file/d/1WMTUFCsBq-9LjWjIioSYlOhQLkuFx4l_/view?usp=sharing",
        },
    ];
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <div ref={ref} className={classes.root}>
            {inView ? (
                <motion.div
                    className={classes.inner}
                    initial="hidden"
                    animate="visible"
                    variants={scroll}
                >
                    <div className={classes.edu}>
                        <h1 style={{ fontSize: "3.1rem", fontWeight: 100 }}>Education</h1>

                        <p style={{ fontWeight: 900, color: "black", marginTop: "2rem" }}>
                            2019 - 2023
                        </p>
                        <p> Computer Science </p>
                        <p> Goverment Engineering College, Rewa </p>
                    </div>
                    <div className={classes.contact}>
                        <h1 style={{ fontSize: "3.1rem", fontWeight: 100 }}>Contact</h1>
                        <div className={classes.grid}>
                            {c.map((e) => {
                                return (
                                    <div className={classes.in}>
                                        <a
                                            target="_blank"
                                            href={e.url}
                                            className={classes.link}
                                        >
                                            {e.label}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            ) : null}
        </div>
    );
}

export default Info;
