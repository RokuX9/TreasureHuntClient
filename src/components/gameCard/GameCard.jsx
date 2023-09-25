import React from "react";
import "./GameCard.css";
import Button from "../button/Button";
import LikeCounter from "../likeCounter/LikeCounter";
import holidayIcon from "../../assets/holiday.png";

export default function GameCard({ game, onClick, ...props }) {
	const { name, likes, category, image } = game;
	return (
		<div className="game_card">
			<img
				src={image}
				alt="game card image"
				className="game_card__image"
			/>
			<div className="game_card__details">
				<h3 className="game_card__name">{name}</h3>
				<div className="game_card__row">
					<LikeCounter likes={likes} />
					<div className="game_card__category">
						{category === "holidays" ? (
							<img
								src={holidayIcon}
								className="holiday_icon"
							/>
						) : (
							category
						)}
					</div>
				</div>
				<Button
					className="game_card__button"
					onClick={onClick}
				>
					למשחק
				</Button>
			</div>
		</div>
	);
}
