import React from "react";
import classes from "./TechStacks.module.css";
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

function TechStacks(props) {
    const a = ["react", "node", "js"];
    const b = ["redux", "mongo", "firebase"];
    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <div ref={ref} className={classes.root}>
            {inView ? (
                <>
                    {" "}
                    <motion.div
                        className={classes.one}
                        initial="hidden"
                        animate="visible"
                        variants={scroll}
                    >
                        <h4 style={{ fontSize: "15px" }}> Stack that I work with </h4>
                        <div className={classes.stacks}>
                            {a.map(function (e) {
                                console.log(e);
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
                            {b.map(function (e) {
                                console.log(e);
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
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={scroll}
                        className={classes.two}
                    >
                        Ready to craft meaningful digital experiences.
                    </motion.div>
                </>
            ) : null}
        </div>
    );
}

export default TechStacks;
