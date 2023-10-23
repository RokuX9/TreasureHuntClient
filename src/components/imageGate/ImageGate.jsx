import React from "react";
import "./ImageGate.css";
import { Canvas, painters, outline } from "headbreaker/src";

export default function ImageGate({ src, ...props }) {
	const imgElement = new Image();
	imgElement.src = src;
	console.log(src);
	React.useEffect(() => {
		const canvas = new Canvas("image_gate", {
			height: 200,
			width: 200,
			image: imgElement,
			painter: new painters.Konva(),
			outline: new outline.Rounded(),
			preventOffstageDrag: true,
		});
		canvas.autogenerate({
			horizontalPiecesCount: 3,
			verticalPiecesCount: 3,
		});
		canvas.shuffle(0.7);
		canvas.draw();
	}, []);

	return <div id="image_gate"></div>;
}
