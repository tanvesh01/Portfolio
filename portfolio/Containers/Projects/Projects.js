import React, { Component } from "react";
import List from "../../Components/Lists_Projects/List";
import Item from "../../Components/Lists_Projects/Item/Item";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
class Projects extends Component {
    state = {
        selectedId: 0,
    };

    changeIdHandler = (id) => {
        if (id === this.state.selectedId) {
            this.setState({
                selectedId: 0,
            });
        } else {
            this.setState({
                selectedId: id,
            });
        }
    };
    render() {
        return (
            <>
                <div className="projects">
                    Find below some valuable projects that I worked on
                    <p>Click on these Boxes for more info!</p>
                </div>
                <div id="root">
                    <div className="container">
                        <AnimateSharedLayout type="crossfade">
                            <List
                                selectedId={this.state.selectedId}
                                changeId={this.changeIdHandler}
                            />
                            <AnimatePresence>
                                {this.state.selectedId && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15 },
                                        }}
                                        transition={{ duration: 0.2, delay: 0.15 }}
                                        style={{ pointerEvents: "auto" }}
                                        className="overlay"
                                        onClick={(e) => {
                                            // this.changeIdHandler(this.state.selectedId)
                                            console.log(
                                                "clicked on everlay",
                                                e.currentTarget
                                            );
                                        }}
                                        // onClick={() => closeModal()}
                                    ></motion.div>
                                )}
                                {this.state.selectedId && (
                                    <Item
                                        id={this.state.selectedId}
                                        key="item"
                                        changeId={this.changeIdHandler}
                                        isVisible={this.state.selectedId != 0}
                                    />
                                )}
                            </AnimatePresence>
                        </AnimateSharedLayout>
                    </div>
                </div>
            </>
        );
    }
}
export default Projects;
