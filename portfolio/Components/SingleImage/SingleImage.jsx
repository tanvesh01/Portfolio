import React from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";

function SingleImage({ color, onClick }) {
    return (
        <div className="single-image-container" onClick={onClick}>
            <motion.div
                layoutId={color}
                className="single-image"
                style={{ backgroundColor: color }}
            />
        </div>
    );
}

export default SingleImage;
