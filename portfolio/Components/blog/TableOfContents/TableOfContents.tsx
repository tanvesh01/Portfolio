import { styled } from "@styles/stitches";
import React from "react"



const TableOfContents:React.FC<{anchors: {
    url: string;
    depth: any;
    text: any;
}[]}> = ({anchors}) => {
    return <div><TOCContainer>
        <p>TABLE OF CONTENTS</p>
        {anchors.map(({depth, text, url},  index) => {
            if (depth === 2) {
                return <H2headingLink href={url} key={index} >{text}</H2headingLink>
            }
            else {
                return <H3headingLink href={url} key={index} >{text}</H3headingLink>
            }
        })}
    </TOCContainer></div>
}
{/* <LandingImage  src="https://images.unsplash.com/photo-1456574808786-d2ba7a6aa654?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644"  /> */}
const TOCContainer = styled("div", {
    position:"sticky",
    top:"5rem"
})

const H2headingLink = styled("a", {
    fontSize: "0.9rem",
    display:"block"
})

const H3headingLink = styled("a", {
    fontSize: "0.8rem",
    paddingLeft: "1rem",
    display:"block"

})

export default TableOfContents;