import React from "react";
import "./BottomHechti.css";
import hechtiPicture from "../../assets/hechtiHeader.png";
import MoneybagCounter from "../moneybagCounter/MoneybagCounter";

export default function BottomHechti({ hide, amount, ...props }) {
	return (
		<div className="bottom_hechti">
			<img
				src={hechtiPicture}
				alt="Hechti Picture"
				className="bottom_hechti__hechti"
			/>
			<MoneybagCounter
				className="bottom_hechti__moneybag"
				amount={amount}
				hide={hide}
			/>
		</div>
	);
}
