import React from "react";
import Head from "next/head";
import Projects from "../Containers/Projects/Projects";
import Intro from "../Containers/Intro/Intro";
import Header from "../Components/Header/Header";
import About from "../Containers/About/About";
import TechStacks from "../Containers/TechStacks/TechStacks";
import Info from "../Containers/Info/Info";

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
    state = {
        index: "head",
        isDarkTheme: false,
    };
    handleShow = (i) => {
        this.setState({ index: i });
        this.refs[i].scrollIntoView({ block: "end", behavior: "smooth" });
    };
    handleDarkModeToggle = (event) => {
        this.setState({ isDarkTheme: event.target.checked });
        console.log(this.state.isDarkTheme);
        if (this.state.isDarkTheme) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            // and to remove, setting the "light" mode:
            document.documentElement.removeAttribute("data-theme");
        }
    };
    render() {
        let nav = null;
        if (typeof window !== "undefined") {
            nav = (
                <Header
                    handleShow={this.handleShow}
                    handleDarkModeToggle={this.handleDarkModeToggle}
                    isDarkTheme={this.state.isDarkTheme}
                />
            );
        }
        return (
            <div style={{ height: "1000px", padding: 0, margin: 0 }}>
                <Head>
                    <link rel="shortcut icon" href="/green.svg" />
                    <title>Tanvesh</title>
                </Head>
                {nav}
                <Intro />
                <div ref="work">
                    <Projects />
                </div>
                <div ref="about">
                    <About />
                </div>
                <TechStacks />
                <div ref="contact">
                    <Info />
                </div>
                <div style={{ height: "2rem", width: "100%" }}></div>
            </div>
        );
    }
}
