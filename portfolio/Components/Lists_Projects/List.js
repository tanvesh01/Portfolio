import React from "react";
import { items } from "../../data";
// import "../../public/Projects.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
function Card(props) {
    return (
        <li className={`card-${props.id}`}>
            <div className="card-content-container">
                <motion.div
                    className="card-content"
                    style={{ backgroundColor: `${props.color}` }}
                    layoutId={`card-container-${props.id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${props.id}`}
                    >
                        <img
                            style={{ objectFit: "cover" }}
                            className="card-image"
                            width="41rem"
                            src={`/${props.id}.jpg`}
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${props.id}`}
                        style={{ color: `${props.textColor}` }}
                    >
                        <span className="category">{props.category}</span>
                        <h2>{props.title}</h2>
                    </motion.div>
                </motion.div>
            </div>
            <a onClick={() => props.changeId(props.id)} className={`card-open-link`}>
                <a className="card-open-button" href={props.url} target="_blank">
                    Visit
                </a>
            </a>
        </li>
    );
}

// function List(props) {
//     return (
//         <ul className="card-list">
// {items.map((card) => (
//     <Card
//         key={card.id}
//         changeId={props.changeId}
//         id={card.id}
//         title={card.title}
//         category={card.category}
//         isSelected={card.id === props.selectedId}
//     />
// ))}
//         </ul>
//     );
// }

function List(props) {
    const [ref, inView] = useInView({ triggerOnce: true });
    return (
        <div ref={ref}>
            {inView ? (
                <>
                    <motion.ul
                        className="card-list"
                        initial="hidden"
                        animate="visible"
                        variants={scroll}
                    >
                        <li className={`card-1`}>
                            <div className="card-content-container">
                                <motion.div className="card-content" layoutId={`card-container-1`}>
                                    <motion.div
                                        className="card-image-container"
                                        layoutId={`card-image-container-1`}
                                        style={{ textAlign: "left" }}
                                    >
                                        <img src={`/1.jpg`} alt="" className="card-image" />
                                    </motion.div>
                                    <motion.div
                                        className="title-container"
                                        style={{ color: "#e0fffe" }}
                                        layoutId={`title-container-1`}
                                    >
                                        <span className="category">Shopping</span>
                                        <h2>E-commerce</h2>
                                    </motion.div>
                                </motion.div>
                            </div>
                            <a onClick={() => props.changeId("1")} className={`card-open-link`}>
                                <a
                                    className="card-open-button"
                                    href="https://rb.gy/vxphsb"
                                    target="_blank"
                                >
                                    Visit
                                </a>
                            </a>
                        </li>
                        <li className="curve">
                            <div className="text">
                                Some projects that I worked on
                                <div
                                    style={{
                                        fontFamily: "Haas",
                                        fontSize: "1rem",
                                        color: "#8c8c8c",
                                    }}
                                >
                                    (Go ahead click on these!)
                                </div>
                            </div>
                            <div className="arrow">
                                <img src="/c2.svg" className="inArrow" />
                            </div>
                        </li>
                    </motion.ul>
                    <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={scroll}
                        className="card-list"
                    >
                        {items.map((card) =>
                            card.id !== "1" ? (
                                <Card
                                    url={card.url}
                                    key={card.id}
                                    changeId={props.changeId}
                                    id={card.id}
                                    color={card.backgroundColor}
                                    textColor={card.textColor}
                                    title={card.title}
                                    category={card.category}
                                    isSelected={card.id === props.selectedId}
                                />
                            ) : null
                        )}
                    </motion.ul>
                </>
            ) : null}
        </div>
    );
}

export default List;
