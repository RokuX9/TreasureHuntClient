import React from "react";
import "./DraggableImage.css";
import Draggable from "../draggable/Draggable";

export default function DraggableImage({ src, ...props }) {
	return (
		<Draggable className="draggable_image">
			<img
				src={src}
				alt="draggable image"
				className="draggable_image__img"
			/>
		</Draggable>
	);
}
