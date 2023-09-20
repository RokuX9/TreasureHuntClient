import React from "react";
import "./GameSelectHeader.css";
import Header from "../header/Header";
import hechtiPicture from "../../assets/hechtiHeader.png";

export default function GameSelectHeader(props) {
	return (
		<Header className="game_select_header">
			<div>
				<img
					src={hechtiPicture}
					alt="Hechti Header"
					className="heachti_header__image"
				/>
				<p>שם שחקן:</p>
			</div>
			<input
				type="text"
				placeholder="הקלד/י כאן"
			/>
		</Header>
	);
}
