import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const scroll = {
    hidden: {
        y: "110%",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

const OnScroll = (props) => {
    const [ref, inView] = useInView({ triggerOnce: true });
    console.log(inView);
    return (
        <div ref={ref}>
            {inView ? (
                <motion.div initial="hidden" animate="visible" variants={scroll}>
                    {props.children}
                </motion.div>
            ) : null}
        </div>
    );
};

export default OnScroll;
