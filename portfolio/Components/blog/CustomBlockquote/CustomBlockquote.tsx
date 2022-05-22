import { styled } from "@styles/stitches"
import React from "react"

const QuouteContainer = styled("aside", {
    position: "relative",
    padding: "1.7rem 3.1rem",
    background: "rgba(254,252,232,1)",
    color: "black",
    borderRadius: "5px",

    "& p" :{
        fontSize: "1.1rem"
    }
})

const CaretEffect = styled("div", {
    position: "absolute",
    top: 0,
    left: -3,
    backgroundImage: "url(/caret.svg)",
    backgroundSize: "0.75rem",
    height: "100%",
    width: "10px"
})

const Heading = styled("h2", {
    fontFamily: '"Londrina Shadow", cursive',
    fontSize:"2rem",
})

export const CustomBlockquote: React.FC<{heading: string}> = ({ children, heading }) => {
    return <QuouteContainer>

        <CaretEffect />
        <Heading>{heading}</Heading>
        {children}
    </QuouteContainer>

}