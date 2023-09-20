import React from "react";
import "./GameCard.css";
import Button from "../button/Button";
import heartIcon from "../../assets/heart.png";
import holidayIcon from "../../assets/holiday.png";

export default function GameCard({ game, ...props }) {
	const { name, likes, category, image } = game;
	return (
		<div className="game_card">
			<div className="game_card__details">
				<h3>{name}</h3>
				<div>
					<span className="game_card__category">
						{category === "holiday" ? (
							<img
								src={holidayIcon}
								className="holiday_icon"
							/>
						) : (
							category
						)}
					</span>
					<img
						src={heartIcon}
						alt="like icon"
					/>
					<span>{likes}</span>
				</div>
			</div>
			<img
				src={image}
				alt="game card image"
				className="game_card__image"
			/>
		</div>
	);
}
