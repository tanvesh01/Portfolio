import { CSSProperties, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

// import { breakpoint } from "@/utils/style";

const CodePreBlockWithHighlight = styled.pre`
	padding: 20px;
	margin: 1rem 0;
	border-radius: 5px;
	overflow-x: auto;
    font-family: 'JetBrains Mono', monospace;
    
`;

const CodeBlockLanguageWrapper = styled.span`
	float: right;
	background-color: #38404a;
	color: #bbbbbb;
	margin-top: -19px;
	margin-right: 5px;
	padding: 10px 5px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
`;

const CodeblockLineNumber = styled.span`
	display: inline-block;
	padding-right: 0.5em;
	margin-left: -0.5rem;
	min-width: 2rem;
	user-select: none;
	text-align: center;

	
`;

/**
 The Highlight code block has the styles for highlighted code
*/
 const CodeblockLineWrapper = styled.div<{ $highlight?: boolean }>`
	height: calc(0.85rem * 1.5);

	${({ $highlight }) =>
		$highlight &&
		css`
			background-color: rgb(106 184 71 / 9%);
			display: block;
			margin-right: -20px;
			margin-left: -20px;
			padding-right: 15px;
			padding-left: 15px;
			border-left: 5px solid #27af52;
			
		`}

	& > ${CodeblockLineNumber} {
		color: #424242;
	}
`;

/**
 * pattern for highlighting lines in code blocks for future reference:
 * ```lang highlight="2,4-5"
 */
const RE_LINE_HIGHLIGHT = /([\d,-]+)/;
function calculateLinesToHighlight(meta = "") {
	const regExpExecArray = RE_LINE_HIGHLIGHT.exec(meta);

	if (!RE_LINE_HIGHLIGHT.test(meta) || regExpExecArray === null) {
		return () => false;
	} else {
		const lineNumbers = regExpExecArray[1]
			.split(",")
			.map((v) => v.split("-").map((v) => parseInt(v, 10)));

		return (index: number) => {
			const lineNumber = index + 1;
			const inRange = lineNumbers.some(([start, end]) =>
				end ? lineNumber >= start && lineNumber <= end : lineNumber === start
			);

			return inRange;
		};
	}
}

export const CodeBlock = (
	props: PropsWithChildren<{ language: string; highlight?: string; style: CSSProperties; filename?:string }>
) => {
	const { language, children, highlight, style, filename } = props;
	const shouldHighlightLine = calculateLinesToHighlight(highlight);

	return (
		<CodePreBlockWithHighlight {...{ style }}>
			<CodeBlockLanguageWrapper>{language.toLocaleUpperCase()}</CodeBlockLanguageWrapper>
			<CodeBlockLanguageWrapper>{filename}</CodeBlockLanguageWrapper>
			{Array.isArray(children) ? (
				children
					?.filter((line) => line !== "\n")
					.map((line, i) => (
						<CodeblockLineWrapper key={i} $highlight={shouldHighlightLine(i)}>
							<CodeblockLineNumber>{i + 1}</CodeblockLineNumber>
							{line}
						</CodeblockLineWrapper>
					))
			) : (
				<CodeblockLineWrapper>
					<CodeblockLineNumber>1</CodeblockLineNumber>
					{children}
				</CodeblockLineWrapper>
			)}
		</CodePreBlockWithHighlight>
	);
};
