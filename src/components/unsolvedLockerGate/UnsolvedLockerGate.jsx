import React from "react";
import "./UnsolvedLockerGate.css";

export default function UnsolvedLockerGate({ games, ...props }) {
	return (
		<div className="unsolved_locker_gate">
			{games.map((game, i) => (
				<div
					className="unsolved_locker_gate__game"
					key={i}
				></div>
			))}
		</div>
	);
}
