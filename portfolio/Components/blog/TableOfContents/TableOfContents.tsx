import { styled } from "@styles/stitches";
import { useActiveId } from "@utils/hooks/useActiveId";
import { useRouter } from "next/router";
import React from "react";

const TableOfContents: React.FC<{
  anchors: {
    url: string;
    depth: any;
    text: any;
  }[];
}> = ({ anchors }) => {
  const idArray: string[] = anchors.reduce((accum: string[], current) => {
    return [...accum, current.url];
  }, []);
  const router = useRouter();
  console.log(router);
  const activeId = useActiveId(idArray);
  console.log(activeId);
  return (
    <div>
      <TOCContainer>
        <p>TABLE OF CONTENTS</p>
        {anchors.map(({ depth, text, url }, index) => {
          if (depth === 2) {
            return (
              <StyledTOCLink
                type="h2"
                isActive={url === activeId}
                href={url}
                key={index}
              >
                {text}
              </StyledTOCLink>
            );
          } else {
            return (
              <StyledTOCLink
                type="h3"
                isActive={url === activeId}
                href={url}
                key={index}
              >
                {text}
              </StyledTOCLink>
            );
          }
        })}
      </TOCContainer>
    </div>
  );
};
{
  /* <LandingImage  src="https://images.unsplash.com/photo-1456574808786-d2ba7a6aa654?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1644"  /> */
}
const TOCContainer = styled("div", {
  position: "sticky",
  top: "5rem",
  "& p": {
    fontSize: "1rem",
  },
});

const StyledTOCLink = styled("a", {
  display: "block",
  color: "rgb(10 12 16 / 80%)",
  opacity: "0.7",
  variants: {
    type: {
      h2: {
        fontSize: "0.9rem",
        marginTop: "10px",
      },
      h3: {
        fontSize: "0.875rem",
        paddingLeft: "1rem",
        marginTop: "8px",
      },
    },
    isActive: {
      true: {
        color: "#0c57c2",
      },
    },
  },
  transition: "opacity 300ms ease 0s",
  "&:hover": {
    opacity: 1,
  },
});

export default TableOfContents;
