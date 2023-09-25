import React from "react";
import "./WrongScan.css";
import xIcon from "../../assets/x.png";
import Overlay from "../../components/overlay/Overlay";
import Button from "../../components/button/Button";

export default function WrongScan({ isOpen, closeOverlay, ...props }) {
	return (
		<Overlay isOpen={isOpen}>
			<div className="wrong_scan__content">
				<img
					src={xIcon}
					alt="x icon"
				/>
				<h2 className="wrong_scan__header">פריט לא נכון!</h2>
				<p className="wrong_scan__text">נסו שוב</p>
			</div>
			<Button onClick={closeOverlay}>חזרה לרמז</Button>
		</Overlay>
	);
}
