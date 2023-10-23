import React from "react";
import "./UnsolvedImageGate.css";

export default function UnsolvedImageGate({ games, ...props }) {
	return (
		<div
			className={
				games.length <= 4
					? "unsolved_image_gate unsolved_image_gate_2"
					: "unsolved_image_gate unsolved_image_gate_3"
			}
		>
			{games.map((game, i) => (
				<div
					className="unsolved_image_gate__game"
					onClick={() => {
						console.log("clicked");
					}}
					key={i}
				/>
			))}
		</div>
	);
}
