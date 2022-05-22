import { GetStaticProps } from "next";
import { useMemo, useRef } from "react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { DocumentHead } from "Components/shared/seo";
import { getBlogPostsSlugs, getMDXFileData } from "@utils/blog";
import { RoughNotation } from "react-rough-notation";
import { styled } from "@styles/stitches";
import { CodeBlock } from "Components/blog/shiki/styled";

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

type TBlogPostPageProps = Omit<Awaited<ReturnType<typeof bundleMDX>>, "frontmatter"> & {
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
    maxWidth:"700px",
    margin:"0 auto"
})

// const Paragraph = styled("p", {
//     fontFam
// })

const Heading = styled("h1", {
    fontSize: "3rem",
	fontFamily:"$heading"
})

const Link = styled("a", {
	color: "$primaryBlue",
	borderBottom:"2px solid transparent",
	fontWeight:500,
	"&:hover":{
		borderColor: "$primaryBlue"
	},
	transition:"border-color 0.3s ease, color 0.3s ease"
})	

// color="#fff176"





const MDXComponents = {
	// p: Paragraph,
	h1: Heading,
	// h2: MDXHeadingWrapper.h2,
	// h3: MDXHeadingWrapper.h3,
	pre: CodeBlock,
	// img: CustomImage,
	a: Link,

	// ul: UnorderedList,
	// ol: OrderedList,
};

// gotta use https://roughnotation.com/

const Post = ({ code, frontmatter, slug }: TProps) => {
	const topRef = useRef<HTMLDivElement>(null);
	const Component = useMemo(() => getMDXComponent(code), [code]);

	return (
		<>
			<DocumentHead
				title={frontmatter.seoTitle ?? frontmatter.title}
				imageURL={frontmatter?.image}
				description={frontmatter.summary}
			/>
			{/* <ReadingProgress /> */}
			<div ref={topRef} />
            <h1>
				{frontmatter.title}
            </h1>


			<Container>
				<Component

					// @ts-expect-error 
					components={{
						// MDXLink,
						// MDXTitle,
						// Sparkles,
						// ChromaHighlight,
						// HighlightWithUseEffect,
						// HighlightWithUseInterval,

						// CustomBlockquote,
						// TextGradient: PrimaryGradient,
						// Heavy,
						// StyledAccentTextLink,
						// RoughNotation,
						...MDXComponents,
					}}
				/>
			</Container>
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

	return { props: { ...result } };
};



export default Post;
