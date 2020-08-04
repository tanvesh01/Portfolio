import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    hi: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "22rem",
        // border: "2px solid #00ff00",
        marginTop: "9rem",
        fontFamily: "'Haas'",
    },
    heading: {
        fontSize: "60px",
        width: "52rem",
        fontWeight: "300",
        zIndex: 0,
    },
    green: {
        height: "29rem",
        position: "absolute",
        // opacity: 0.8,
        marginLeft: "-26%",
        marginTop: "-3rem",
    },
    "@media only screen and (max-width: 600px)": {
        green: {
            display: "none",
        },
        heading: {
            fontSize: "11.5vw",
            textAlign: "left",
            lineHeight: "13vw",
            marginLeft: "2rem",
        },
        hi: {
            width: "88%",
            marginTop: 0,
            height: "27rem",
        },
    },
});

const Intro = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.hi}>
            <img src="/images/green.svg" alt="green" className={classes.green} />
            <h1 className={classes.heading}>
                Hey! I’m Tanvesh, a India-Based Full-Stack Developer.
            </h1>
        </div>
    );
};

export default Intro;
