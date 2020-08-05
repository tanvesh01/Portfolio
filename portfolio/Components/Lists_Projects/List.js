import React from "react";
import { items } from "../../data";
// import "../../public/Projects.css";
import { motion } from "framer-motion";

function Card(props) {
    return (
        <li className={`card-${props.id}`}>
            <div className="card-content-container">
                <motion.div className="card-content" layoutId={`card-container-${props.id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${props.id}`}
                    >
                        <img
                            style={{ objectFit: "cover" }}
                            className="card-image"
                            width="41rem"
                            src={`/images/${props.id}.jpg`}
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${props.id}`}
                    >
                        <span className="category">{props.category}</span>
                        <h2>{props.title}</h2>
                    </motion.div>
                </motion.div>
            </div>
            <a onClick={() => props.changeId(props.id)} className={`card-open-link`} />
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
    return (
        <>
            <ul className="card-list">
                <li className={`card-1`}>
                    <div className="card-content-container">
                        <motion.div className="card-content" layoutId={`card-container-1`}>
                            <motion.div
                                className="card-image-container"
                                layoutId={`card-image-container-1`}
                            >
                                <img
                                    style={{ objectFit: "cover" }}
                                    className="card-image"
                                    width="41rem"
                                    src={`/images/1.jpg`}
                                    alt=""
                                />
                            </motion.div>
                            <motion.div className="title-container" layoutId={`title-container-1`}>
                                <span className="category">Shopping</span>
                                <h2>E-commerce</h2>
                            </motion.div>
                        </motion.div>
                    </div>
                    <a onClick={() => props.changeId("1")} className={`card-open-link`} />
                </li>
            </ul>
            <ul className="card-list">
                {items.map((card) =>
                    card.id !== "1" ? (
                        <Card
                            key={card.id}
                            changeId={props.changeId}
                            id={card.id}
                            title={card.title}
                            category={card.category}
                            isSelected={card.id === props.selectedId}
                        />
                    ) : null
                )}
            </ul>
        </>
    );
}

export default List;
