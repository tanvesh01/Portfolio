import React from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";

function Gallery({ items, setIndex }) {
    return (
        <ul className="gallery-container">
            {items.map((color, i) => (
                <motion.li
                    className="gallery-item"
                    key={color}
                    onClick={() => setIndex(i)}
                    style={{ backgroundColor: color }}
                    layoutId={color}
                />
            ))}
        </ul>
    );
}

export default Gallery;
