import React from "react";
import "./Main.css";

export default function Main({ children, className, ...props }) {
	let mainBubbleClass = "";
	let arrowSideClass = "";
	switch (props.bubble) {
		case "up":
			mainBubbleClass = " bubble_up";
			arrowSideClass = "main__arrow_type_up";
			break;
		case "down":
			mainBubbleClass = " bubble_down";
			arrowSideClass = "main__arrow_type_down";
			break;
		default:
			break;
	}

	return (
		<main className={"main " + className + mainBubbleClass}>
			{...children}
			<div className={"main__arrow " + arrowSideClass}></div>
		</main>
	);
}
