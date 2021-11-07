import React from "react";
import classes from "./NavBar.module.css";
const Nav = ({ bgColor, handleShow, isDarkTheme, handleToggle }) => {
    console.log(isDarkTheme);
    return (
        <nav
            className={classes.nav}
            style={{
                backgroundColor:
                    bgColor === "top" ? "transparent" : isDarkTheme ? "white" : "#1c1c1c",
            }}
        >
            <a className={classes.brand}>Tanvesh</a>
            <ul className={classes.navLinks}>
                <label>
                    <input
                        type="checkbox"
                        checked={isDarkTheme}
                        onChange={handleToggle}
                    />{" "}
                    Dark
                </label>
                <li className={classes.navItem}>
                    <a className={classes.tag} onClick={() => handleShow("work")}>
                        Work
                    </a>
                </li>
                <li className={classes.navItem}>
                    <a className={classes.tag} onClick={() => handleShow("about")}>
                        About
                    </a>
                </li>
                <li className={classes.navItem}>
                    <a className={classes.tag} onClick={() => handleShow("contact")}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
