import React from "react";
import "./HechtiHeader.css";
import Header from "../header/Header";
import hechtiPicture from "../../assets/hechtiHeader.png";

export default function HechtiHeader(props) {
	return (
		<Header>
			<img
				src={hechtiPicture}
				alt="Hechti Header"
				className="heachti_header__image"
			/>
			<></>
		</Header>
	);
}
