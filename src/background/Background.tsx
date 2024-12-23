/** @jsxImportSource @emotion/react */
import { ReactP5Wrapper, P5CanvasInstance } from "@p5-wrapper/react";

interface Snowflake {
	x: number;
	y: number;
	size: number;
}

function sketch(p5: P5CanvasInstance) {
	const snowflakes: Snowflake[] = [];

	p5.setup = () => {
		p5.createCanvas(window.innerWidth, window.innerHeight);
	};

	p5.draw = () => {
		p5.background(20, 30, 50);
		p5.fill(255);
		p5.noStroke();

		if (p5.frameCount % 5 === 0) {
			snowflakes.push({
				x: p5.random(0, p5.width),
				y: 0,
				size: p5.random(2, 5),
			});
		}
		for (let i = snowflakes.length - 1; i >= 0; i--) {
			const snowflake = snowflakes[i];
			p5.ellipse(snowflake.x, snowflake.y, snowflake.size);
			snowflake.y += snowflake.size * 0.5;
			if (snowflake.y > p5.height) {
				snowflakes.splice(i, 1);
			}
		}
	};
}

export const Background = () => {
	return <ReactP5Wrapper sketch={sketch} />;
};
