import { GetStaticProps } from "next";
import React, { useEffect, useMemo, useRef } from "react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { DocumentHead } from "Components/shared/seo";
import { getBlogPostsSlugs, getMDXFileData } from "@utils/blog";
import { styled } from "@styles/stitches";
import { CodeBlock } from "Components/blog/shiki/styled";
import { CustomImage } from "Components/blog/CustomImage/CustomImage";
import { LandingImage } from "Components/blog/LandingImage/LandingImage";
import { CustomBlockquote } from "Components/blog/CustomBlockquote/CustomBlockquote";
import { supabase } from "@utils/supabaseClient";

import axios from "axios";
import TableOfContents from "Components/blog/TableOfContents/TableOfContents";
import { BlogHeadings } from "Components/blog/Typography/Headings";
import BlogHeader from "Components/blog/BlogHeader/BlogHeader";

type TBlogPostFrontmatter = {
  title: string;
  seoTitle?: string;
  subtitle?: string;
  summary: string;
  image?: string;
  published: boolean;
  publishedAt: string;
  updatedAt: string;
};

type PostDetails = {
  id: number;
  slug: string;
  inserted_at: string;
  updated_at: string;
  view_count: number;
  likes: number;
};

type TBlogPostPageProps = Omit<
  Awaited<ReturnType<typeof bundleMDX>>,
  "frontmatter"
> & {
  frontmatter: TBlogPostFrontmatter;
  slug: string;
};

// import { getButtondownSubscriberCount } from "@/domains/Buttondown";

// import { MDXLink, MDXTitle } from "@/styles/components";
// import { Sparkles } from "@/styles/special";
// import {
// 	BlogPostTitle,`
// 	Datestamp,
// 	PrimaryGradient,
// 	Heavy,
// 	StyledAccentTextLink,
// } from "@/styles/typography";
// import { TBlogPostPageProps } from "@/typings/blog";
// import { getMDXFileData, getBlogPostsSlugs } from "@/utils/blog";
type TProps = TBlogPostPageProps;

const Container = styled("div", {
  maxWidth: "70rem",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  gap: "40px",
});

const Heading = styled("h1", {
  fontSize: "5rem",
  fontFamily: "$heading",
});

const Link = styled("a", {
  color: "$primaryBlue",
  borderBottom: "2px solid transparent",
  fontWeight: 500,
  "&:hover": {
    borderColor: "$primaryBlue",
  },
  transition: "border-color 0.3s ease, color 0.3s ease",
});

// color="#fff176"

const Paragraph = styled("p", {
  padding: "10px 0px",
  fontFamily: "Inter",
  color: "#252a2f",
});

const MDXComponents = {
  p: Paragraph,
  h1: Heading,
  h2: BlogHeadings("h2"),
  h3: BlogHeadings("h3"),
  pre: CodeBlock,
  img: CustomImage,
  a: Link,
  BlogHeader: BlogHeader,
  // ul: UnorderedList,
  // ol: OrderedList,
};

// gotta use https://roughnotation.com/

const Post = ({ code, frontmatter, slug, matter }: TProps) => {
  const topRef = useRef<HTMLDivElement>(null);
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const anchors = React.Children.toArray(
    Component({
      // @ts-expect-error
      components: {
        CustomBlockquote,
        LandingImage,
        ...MDXComponents,
      },
    })?.props.children
  )
    .filter(
      (child: any) =>
        child.props?.type && ["h2", "h3"].includes(child.props.type)
    )
    .map((child: any) => ({
      url: "#" + child.props.id,
      depth:
        (child.props.type && parseInt(child.props.type.replace("h", ""), 0)) ??
        0,
      text: child.props.children,
    }));
  console.log(
    Component({
      // @ts-expect-error
      components: {
        CustomBlockquote,
        LandingImage,
        ...MDXComponents,
      },
    })
  );

  // useEffect(() => {
  // 	axios.get("/api/blogs/get-details-blog", {params: { slug }}).then(res => {
  // 		console.log(res)
  // 	}).catch(err =>{
  // 		console.log(err)
  // 	})
  // }, [])
  // console.log(code, Component)
  return (
    <>
      <DocumentHead
        title={frontmatter.seoTitle ?? frontmatter.title}
        imageURL={frontmatter?.image}
        description={frontmatter.summary}
      />
      <div ref={topRef} />
      <div
        style={{
          backgroundColor: "#f7f7f6",
        }}
      >
        <Container>
          <div>
            <BlogHeader
              heading="Cut down CRA build times by 70%"
              frontmatter={frontmatter}
            />
            <Component
              // @ts-expect-error
              components={{
                CustomBlockquote,
                LandingImage,
                ...MDXComponents,
              }}
            />
          </div>
          <TableOfContents anchors={anchors} />
        </Container>
      </div>
      {/* <EndLinks>
				<ShareLinks title={frontmatter.title} slug={slug} />
				<ScrollToTop topRef={topRef} />
			</EndLinks> */}
      {/* <PostMetaDataGrid>
				<Datestamp>
					Last updated:{" "}
					{new Date(frontmatter.updatedAt ?? frontmatter.publishedAt).toLocaleDateString("en-US", {
						month: "long",
						year: "numeric",
						day: "numeric",
					})}
					{!frontmatter.published && <PostNotPublishedWarning />}
				</Datestamp>
			</PostMetaDataGrid> */}
      {/* <ViewsCounter pageType="post" /> */}
      {/* <NewsletterSignup {...{ subscriberCount }} /> */}
    </>
  );
};

export async function getStaticPaths() {
  const postsSlugs = await getBlogPostsSlugs();

  const paths = postsSlugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-expect-error
  const result = await getMDXFileData(params?.slug, { cwd: "content/blog" });
  //   const getHeadings = (source:string) => {
  //     const regex = /<h2>(.*?)<\/h2>/g;
  //     if (source.match(regex)) {
  // 		console.log(source)
  // 		// @ts-expect-error
  //       return source.match(regex).map((heading) => {
  //         const headingText = heading.replace("<h2>", "").replace("</h2>", "");

  //         const link = "#" + headingText.replace(/ /g, "_").toLowerCase();

  //         return {
  //           text: headingText,
  //           link,
  //         };
  //       });
  //     }

  //     return [];
  //   };

  //   const headings = getHeadings(result.matter.content);
  //   const file = await remark()
  //     .use(remarkToc)
  //     .process(result.matter.content)

  //   console.log(headings)

  return { props: { ...result } };
};

export default Post;
