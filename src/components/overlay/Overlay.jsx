import React from "react";
import "./Overlay.css";

export default function Overlay({ children, isOpen, ...props }) {
	return (
		<div className={isOpen ? "overlay overlay_opened" : "overlay"}>
			{...children}
		</div>
	);
}
