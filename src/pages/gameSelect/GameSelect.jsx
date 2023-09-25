import React from "react";
import "./GameSelect.css";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import GameCard from "../../components/gameCard/GameCard";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpeg";
import hechtiPicture from "../../assets/hechtiHeader.png";

const demoGamesArray = [
	{ id: 0, name: "כחול עמוק", image: img1, category: "12+", likes: 87 },
	{
		id: 1,
		name: "איך יודעים שבא אביב?",
		image: img2,
		category: "holidays",
		likes: 112,
	},
	{ id: 2, name: "פסיפס של תרבויות", image: img3, category: "5+", likes: 317 },
];

export default function GameSelect({ setNewGame, ...props }) {
	const [playerName, setPlayerName] = React.useState("");

	return (
		<>
			<Header className="game_select__header">
				<div className="header__row">
					<p className="header__input_header">שם שחקן:</p>
					<img
						src={hechtiPicture}
						alt="Hechti Header"
						className="heachti_header__image"
					/>
				</div>
				<input
					type="text"
					placeholder="הקלד/י כאן"
					className="header__input"
					onChange={(e) => {
						setPlayerName(e.target.value);
					}}
				/>
			</Header>
			<Main className="game_list">
				<h2>רשימת משחקים</h2>
				{demoGamesArray.map((game) => (
					<GameCard
						key={game.name}
						game={game}
						onClick={() => setNewGame(game.name, game.id, playerName)}
					/>
				))}
			</Main>
		</>
	);
}
