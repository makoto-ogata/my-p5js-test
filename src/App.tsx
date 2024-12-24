/** @jsxImportSource @emotion/react */
import { Background } from "./background/Background";
import { css, keyframes } from "@emotion/react";

function App() {
	return (
		<>
			<div css={wrapper}>
				<Background />
				<h1 css={message}>Wish you a merry Christmas.</h1>
			</div>
		</>
	);
}

const wrapper = css({
	position: "relative",
	width: "100%",
	height: "100vh",
});

const textAnimation = keyframes({
	"0%": {
		opacity: 0,
	},
	"50%": {
		opacity: 0.5,
	},
	"100%": {
		opacity: 1,
	},
});

const message = css({
	animation: `3s ease-in ${textAnimation}`,
	color: "#fff",
	position: "absolute",
	inset: "0",
	margin: "auto",
	width: "max-content",
	height: "max-content",
	textShadow: "0px 0px 27px rgba(137, 141, 145, 0.76)",
});

export default App;
