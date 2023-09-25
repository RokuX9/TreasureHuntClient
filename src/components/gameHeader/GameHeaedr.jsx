import React from "react";
import "./GameHeader.css";
import treasureIcon from "../../assets/treasure.png";
import CoinCounter from "../coinCounter/CoinCounter";
import Header from "../header/Header";
import ProgressBar from "../progressBar/ProgressBar";

export default function GameHeader({ gameName, coinsAmount, level, ...props }) {
	return (
		<Header className="game_header">
			<h1 className="game_header__name">{gameName}</h1>
			<div className="game_header__row">
				<img
					src={treasureIcon}
					alt="treasure icon"
				/>
				<ProgressBar level={level} />
				<CoinCounter coinsAmount={coinsAmount} />
			</div>
		</Header>
	);
}
