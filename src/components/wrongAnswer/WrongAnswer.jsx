import React from "react";
import "./WrongAnswer.css";
import xIcon from "../../assets/x.png";
import Overlay from "../../components/overlay/Overlay";
import Button from "../../components/button/Button";

export default function WrongAnswer({ isOpen, closeOverlay, ...props }) {
	return (
		<Overlay isOpen={isOpen}>
			<div className="wrong_answer__content">
				<img
					src={xIcon}
					alt="x icon"
				/>
				<h2 className="wrong_answer__header">תשובה לא נכונה!</h2>
				<p className="wrong_answer__text">נסו שוב</p>
			</div>
			<Button onClick={closeOverlay}>חזרה לרמז</Button>
		</Overlay>
	);
}
