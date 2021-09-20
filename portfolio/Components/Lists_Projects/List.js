import React from "react";
import { items } from "../../data";
import { motion } from "framer-motion";

const scroll = {
    hidden: {
        y: "50%",
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
function Card({
    url,
    changeId,
    id,
    backgroundColor,
    textColor,
    title,
    category,
    isSelected,
}) {
    return (
        <li className={`card-${id} card`}>
            <div className="card-content-container">
                <motion.div
                    className="card-content"
                    style={{ backgroundColor: `${backgroundColor}` }}
                    layoutId={`card-container-${id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img
                            style={{ objectFit: "cover" }}
                            className="card-image"
                            width="41rem"
                            src={`/${id}.jpg`}
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                        style={{ color: `${textColor}` }}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                    </motion.div>
                    {!isSelected && (
                        <div onClick={() => changeId(id)} className={`card-open-link`}>
                            <a className="card-open-button" href={url} target="_blank">
                                Visit
                            </a>
                        </div>
                    )}
                </motion.div>
            </div>
        </li>
    );
}

function List(props) {
    return (
        <>
            <motion.ul
                initial="hidden"
                animate="visible"
                // variants={scroll}
                className="card-list"
            >
                {items.map((card, index) => (
                    <Card
                        key={index}
                        changeId={props.changeId}
                        isSelected={card.id === props.selectedId}
                        {...card}
                    />
                ))}
            </motion.ul>
        </>
    );
}

export default List;
