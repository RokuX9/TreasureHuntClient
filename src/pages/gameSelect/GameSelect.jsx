import React from "react";
import "./GameSelect.css";

import GameSelectHeader from "../../components/gameSelectHeader/GameSelectHeader";
import Main from "../../components/main/Main";
import GameCard from "../../components/gameCard/GameCard";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpeg";

const demoGamesArray = [
	{ name: "כחול עמוק", image: img1, category: "12+", likes: 87 },
	{
		name: "איך יודעים שבא אביב?",
		image: img2,
		category: "holidays",
		likes: 112,
	},
	{ name: "פסיפס של תרבויות", image: img3, category: "5+", likes: 317 },
];

export default function GameSelect(props) {
	return (
		<>
			<GameSelectHeader />
			<Main>
				<h2>רשימת משחקים</h2>
				{demoGamesArray.map((game) => (
					<GameCard game={game} />
				))}
			</Main>
		</>
	);
}
