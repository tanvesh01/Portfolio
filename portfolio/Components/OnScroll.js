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
        <>
            <div style={{ height: "400px" }}>1.</div>

            <div ref={ref} style={{ height: "400px", color: "black" }}>
                {inView ? (
                    <motion.h1 initial="hidden" animate="visible" variants={scroll}>
                        Experience!!! == {inView}
                    </motion.h1>
                ) : null}
            </div>
        </>
    );
};

export default OnScroll;
