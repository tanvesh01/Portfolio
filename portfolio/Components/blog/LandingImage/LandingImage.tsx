import NextImage from "next/image";
import styled from "styled-components";

export const ImageWrapper = styled.span`
	& img {
        margin:0 auto;
		max-width: 650px;
		width: 100%;
		border-radius: 5px;
	}
`;

export const StyledImage = styled.img`
    margin: 6.1rem auto;
    width: 100%;
    transform: scale(1.2);
    border-radius: 5px;
`

export const LandingImage = ({
	alt,
	src,
	height,
	width,
}: {
	alt: string;
	src: string;
	height?: string;
	width?: string;
}) => {
	const type = src.slice(-3);

	if (type === "mp4") {
		return (
			<video
				autoPlay
				loop
				muted
				controls
				style={{
					maxWidth: "var(--max-width)",
					width: "100%",
					borderRadius: "var(--border-radius)",
				}}
			>
				<source src={src} />
				{alt}
			</video>
		);
	}
	if (src[0] === "/") {
		return (
			<ImageWrapper>
				<NextImage {...{ alt, src, height, width }} quality="100" />
			</ImageWrapper>
		);
	}
{/* for external images */}
			{/* eslint-disable-next-line @next/next/no-img-element */}
	return (<StyledImage src={src} alt={alt} loading="lazy">

    </StyledImage>
			
		
	);
};
