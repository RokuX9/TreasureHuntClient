import React from "react";
import "./RiddleAnswer.css";

export default function RiddleAnswer({ order, content, onClick, ...props }) {
	return (
		<div
			className="riddle_answer"
			onClick={onClick}
		>
			<p className="riddle_answer__content">{order}.</p>
			<p className="riddle_answer__content riddle_answer__answer">{content}</p>
		</div>
	);
}
