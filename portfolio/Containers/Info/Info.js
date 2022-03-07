import React from "react";
import classes from "./Info.module.css";
import { motion } from "framer-motion";

const INFO_ARRAY = [
  { label: "Github", url: "https://github.com/tanvesh01" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/tanvesh01/" },
  { label: "Twitter", url: "https://twitter.com/Sarve___tanvesh" },
  { label: "@mail", url: "mailto:sarvetanvesh01@gmail.com" },
  {
    label: "Resume",
    url: "https://tanvesh.vercel.app/resume.pdf",
  },
];
function Info() {
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.edu}>
          <h1 style={{ fontSize: "3.1rem", fontWeight: 100 }}>Education</h1>

          <p style={{ fontWeight: 900, color: "black", marginTop: "2rem" }}>
            2019 - 2023
          </p>
          <p> Computer Science </p>
          <p> Government Engineering College, Rewa </p>
        </div>
        <div className={classes.contact}>
          <h1 style={{ fontSize: "3.1rem", fontWeight: 100 }}>Contact</h1>
          <div className={classes.grid}>
            {INFO_ARRAY.map((e) => {
              return (
                <div className={classes.in}>
                  <a target="_blank" href={e.url} className={classes.link}>
                    {e.label}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
