import React from "react";
import classes from "./NavBar.module.css";
const Nav = (props) => {
    return (
        <nav
            className={classes.nav}
            style={{
                backgroundColor: props.bgColor === "top" ? "transparent" : "white",
            }}
        >
            <a className={classes.brand}>Tanvesh</a>
            <ul className={classes.navLinks}>
                <li className={classes.navItem}>
                    <a className={classes.tag} href="#">
                        Work
                    </a>
                </li>
                <li className={classes.navItem}>
                    <a className={classes.tag} href="#">
                        About
                    </a>
                </li>
                <li className={classes.navItem}>
                    <a className={classes.tag} href="#">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
