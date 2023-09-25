import React from "react";
import "./RightAnswer.css";
import Overlay from "../../components/overlay/Overlay";
import Button from "../../components/button/Button";
import MoneybagCounter from "../moneybagCounter/MoneybagCounter";

export default function RightAnswer({ isOpen, amount, advance, ...props }) {
	return (
		<Overlay isOpen={isOpen}>
			<div className="right_answer__content">
				<h2 className="right_answer__header">נכון מאוד!</h2>
				<MoneybagCounter amount={amount} />
			</div>
			<Button onClick={advance}>לרמז הבא</Button>
		</Overlay>
	);
}
