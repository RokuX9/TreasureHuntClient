import React from "react";
import "./CoinCounter.css";
import coinsIcon from "../../assets/coins.png";

export default function CoinCounter({ coinsAmount, ...props }) {
	return (
		<div>
			<span className="coin_counter__count">{coinsAmount}</span>
			<img
				src={coinsIcon}
				alt="coins Icon"
			/>
		</div>
	);
}
