import React from "react";
import { motion } from "framer-motion";
import { items } from "../../../data";
import CloseIcon from "../../Icons/Close";
import classes from "./Item.module.css";

function Item({ id, key, changeId, isVisible }) {
    const { category, title, backgroundColor, textColor, desc, closeButtonColor } =
        items.find((item) => item.id === id);

    const closeModal = () => {
        console.log("clicked");

        changeId(id);
    };

    return (
        <>
            <div className={classes.cardContainerOpen}>
                <motion.div
                    className={classes.cardContentContainer}
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className={classes.cardImageContainer}
                        layoutId={`card-image-container-${id}`}
                    >
                        <div
                            style={{
                                backgroundColor: `${backgroundColor}`,
                                textAlign: "left",
                            }}
                        >
                            <img
                                style={{ objectFit: "cover" }}
                                src={`/${id}.jpg`}
                                className="card-image"
                                alt=""
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className={classes.titleContainer}
                        layoutId={`title-container-${id}`}
                        style={{ color: `${textColor}` }}
                    >
                        <div>
                            <span className="category">{category}</span>
                            <h2>{title}</h2>
                        </div>
                        <button
                            onClick={() => closeModal()}
                            className={classes.closeButton}
                            style={{ backgroundColor: closeButtonColor }}
                        >
                            <CloseIcon color={backgroundColor} />
                        </button>
                    </motion.div>
                    <motion.div className={classes.content} animate>
                        <div className={classes.desc}>{desc}</div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default Item;
