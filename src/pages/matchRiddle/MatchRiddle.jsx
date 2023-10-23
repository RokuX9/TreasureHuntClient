import React from "react";
import "./MatchRiddle.css";
import GameHeader from "../../components/gameHeader/GameHeaedr";
import Main from "../../components/main/Main";
import BottomHechti from "../../components/bottomHechti/BottomHechti";
import Draggable from "../../components/draggable/Draggable";
import DraggableImage from "../../components/draggableImage/DraggableImage";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpeg";

export default function MatchRiddle({ answers, ...props }) {
	return (
		<>
			<GameHeader />
			<Main
				bubble="down"
				className="match_riddle"
			>
				<h2 className="match_riddle__instuction">
					גררו את המילה לתמונה המתאימה
				</h2>
				<div className="match_riddle__draggable_box">
					<div className="draggable_box__column">
						<DraggableImage src={img1} />
						<DraggableImage src={img2} />
						<DraggableImage src={img3} />
					</div>
					<div className="draggable_box__column">
						<Draggable>hello</Draggable>
						<Draggable>hello</Draggable>
						<Draggable>hello</Draggable>
					</div>
				</div>
			</Main>
			<BottomHechti />
		</>
	);
}
