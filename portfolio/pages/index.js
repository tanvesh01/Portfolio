import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Projects from "../Containers/Projects/Projects";
import Header from "../Components/Header/Header";
const head = {
    initial: {
        opacity: 0,
        scale: 0.5,
        originY: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            type: "spring",
        },
    },
};

export default class Home extends React.Component {
    // componentDidMount() {
    //     if (window !== undefined) {

    //     }
    // }
    state = {
        index: "head",
    };
    handleShow(i) {
        this.setState({ index: i });
        this.refs[i].scrollIntoView({ block: "end", behavior: "smooth" });
    }
    render() {
        let nav = null;
        if (typeof window !== "undefined") {
            nav = <Header />;
        }
        return (
            <div style={{ height: "1000px", padding: 0, margin: 0 }}>
                {nav}
                <Projects />
            </div>
        );
    }
}

{
    /* <a onClick={() => this.handleShow("contact")}>2 on that</a>
                <div ref={"head"} style={{ height: "400px" }}>
                    1.
                </div>
                <div ref={"contact"} style={{ height: "400px" }}>
                    2.
                </div> */
}
