import React from "react";
import classes from "./TechStacks.module.css";

function TechStacks(props) {
    const a = ["react", "node", "js"];
    const b = ["redux", "mongo", "firebase"];
    return (
        <div className={classes.root}>
            <div className={classes.one}>
                <h4 style={{ fontSize: "15px" }}> Stack that I work with </h4>
                <div className={classes.stacks}>
                    {a.map(function (e) {
                        console.log(e);
                        return (
                            <div style={{ textAlign: "center", color: "#989898" }}>
                                <img
                                    key={e}
                                    className={classes.imgs}
                                    src={`/${e}.png`}
                                    width="2rem"
                                    height="2rem"
                                />
                                <h4 style={{ fontSize: "15px" }}>{e}</h4>
                            </div>
                        );
                    })}
                </div>
                <div className={classes.stacks}>
                    {b.map(function (e) {
                        console.log(e);
                        return (
                            <div style={{ textAlign: "center", color: "#989898" }}>
                                <img
                                    key={e}
                                    className={classes.imgs}
                                    src={`/${e}.png`}
                                    width="2rem"
                                    height="2rem"
                                />
                                <h4 style={{ fontSize: "15px" }}>{e}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={classes.two}>Ready to craft meaningful digital experiences.</div>
        </div>
    );
}

export default TechStacks;
