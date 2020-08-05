import React, { Component } from "react";
// import "../../public/Projects.css";
import List from "../../Components/Lists_Projects/List";
import Item from "../../Components/Lists_Projects/Item/Item";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
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
        console.log(this.state.selectedId);
        return (
            <div id="root">
                <div className="container">
                    <AnimateSharedLayout type="crossfade">
                        <List selectedId={this.state.selectedId} changeId={this.changeIdHandler} />
                        <AnimatePresence>
                            {this.state.selectedId && (
                                <Item
                                    id={this.state.selectedId}
                                    key="item"
                                    changeId={this.changeIdHandler}
                                />
                            )}
                        </AnimatePresence>
                    </AnimateSharedLayout>
                </div>
            </div>
        );
    }
}
export default Projects;
