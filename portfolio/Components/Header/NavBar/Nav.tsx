import { styled } from "@stitches/react";
import React from "react";
import classes from "./NavBar.module.css";
const Nav = (props: { bgColor: string }) => {
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
          <NavLinks href="#work">Work</NavLinks>
        </li>
        <li className={classes.navItem}>
          <NavLinks href="#about">About</NavLinks>
        </li>
        <li className={classes.navItem}>
          <NavLinks href="#contact">Contact</NavLinks>
        </li>
      </ul>
    </nav>
  );
};
const linkHoverStyles = {
  content: "",
  position: "absolute",
  bottom: -2,
  left: 0,
  height: 2,
  width: "100%",
  background: "#rgb(16,175,255)",
  // @ts-ignore
  background:
    "linear-gradient(90deg, rgba(16,175,255,1) 0%, rgba(255,198,198,1) 100%)",
};

const NavLinks = styled("a", {
  color: "black",
  position: "relative",
  paddingBottom: "2px",
  textDecoration: "none",
  "&:hover::after": linkHoverStyles,
  "&:focus::after": linkHoverStyles,
});

export default Nav;
