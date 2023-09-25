import React from "react";
import "./Button.css";

export default function Button({ children, onClick, className, ...props }) {
	return (
		<button
			onClick={onClick}
			className={"button " + className}
		>
			{...children}
		</button>
	);
}
