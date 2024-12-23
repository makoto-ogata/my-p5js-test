/** @jsxImportSource @emotion/react */
import { Background } from "./background/Background";
import { css } from "@emotion/react";

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

const message = css({
	color: "#fff",
	position: "absolute",
	inset: "0",
	margin: "auto",
	width: "max-content",
	height: "max-content",
});

export default App;
