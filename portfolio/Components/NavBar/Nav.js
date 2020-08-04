import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    navLinks: {
        listStyle: "none",
        display: "flex",
    },
    nav: {
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "4rem",
        fontFamily: "'Haas'",
        top: 0,
        fontSize: "16px",
        zIndex: 1,
        paddingLeft: "30px",
        paddingRight: "10px",
        transition: "background-color 0.6s",
    },
    tag: {
        display: "inline-block",
        textDecoration: "none",
        color: "black",
        padding: "12px",
        "&:hover": {
            color: "#00ff00",
        },
    },
    brand: {
        fontWeight: 800,
    },
});

const Nav = (props) => {
    const classes = useStyles();
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
