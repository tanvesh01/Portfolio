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
        paddingLeft: "30px",
        paddingRight: "10px",
        transition: "background-color 0.6s",
    },
    tag: {
        display: "inline-block",
        padding: "10px 15px",
        textDecoration: "none",
        color: "black",
        "&:hover": {
            color: "#00ff00",
        },
    },
});

const Nav = (props) => {
    const classes = useStyles();
    return (
        <nav
            className={classes.nav}
            style={{
                backgroundColor: props.bgColor === "top" ? "transparent" : "white",
                zIndex: 100,
            }}
        >
            <a className={classes.brand}>Tanvesh</a>
            <ul className={classes.navLinks}>
                <li className={classes.navItem}>
                    <a className={classes.tag} href="#">
                        Curriculum
                    </a>
                </li>
                <li className={classes.navItem}>
                    <a className={classes.tag} href="#">
                        Forum
                    </a>
                </li>
                <li className={classes.navItem}>
                    <a className={classes.tag} href="#">
                        News
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
