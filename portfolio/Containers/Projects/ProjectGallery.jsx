import React, { useState } from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import Gallery from "../../Components/Gallery/Gallery";
import SingleImage from "../../Components/SingleImage/SingleImage";
// import "../../public/projectGallery.css";

const numColors = 4 * 4;
const makeColor = (hue) => `hsl(${hue}, 100%, 50%)`;
const colors = Array.from(Array(numColors)).map((_, i) =>
    makeColor(Math.round((360 / numColors) * i))
);

const ProjectGallery = () => {
    const [index, setIndex] = useState(false);
    return (
        <AnimateSharedLayout>
            <Gallery items={colors} setIndex={setIndex} />
            <AnimatePresence>
                {index !== false && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        key="overlay"
                        className="overlay"
                        onClick={() => setIndex(false)}
                    />
                )}

                {index !== false && (
                    <SingleImage
                        key="image"
                        index={index}
                        color={colors[index]}
                        setIndex={setIndex}
                        // onClick={() => setIndex(false)}
                    />
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

export default ProjectGallery;
