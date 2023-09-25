import React from "react";
import "./LikeCounter.css";
import heartIcon from "../../assets/heart.png";

export default function LikeCounter({ likes, ...props }) {
	return (
		<div>
			<span className="like_counter__text">{likes}</span>
			<img
				src={heartIcon}
				alt="like icon"
			/>
		</div>
	);
}
