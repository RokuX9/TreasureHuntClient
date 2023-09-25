import React from "react";
import "./ProgressBar.css";

export default function ProgressBar({ level, ...props }) {
	return (
		<div className="progress_bar">
			<div className={"progress_bar__progress_" + level}></div>
		</div>
	);
}
