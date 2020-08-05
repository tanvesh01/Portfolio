import React from "react";
import { motion } from "framer-motion";
import { items } from "../../../data";
// import "../../../public/Projects.css";

function Item(props) {
    console.log(props.id);
    const { category, title } = items.find((item) => item.id === props.id);

    return (
        <>
            <a onClick={() => props.changeId(props.id)}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    style={{ pointerEvents: "auto" }}
                    className="overlay"
                ></motion.div>
            </a>
            <div className="card-content-container open">
                <motion.div className="card-content" layoutId={`card-container-${props.id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${props.id}`}
                    >
                        <div style={{ backgroundColor: "beige" }} className="card-image" alt="" />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${props.id}`}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                    </motion.div>
                    {/* <motion.div className="content-container" animate>
                        <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
                    </motion.div> */}
                </motion.div>
            </div>
        </>
    );
}

export default Item;
