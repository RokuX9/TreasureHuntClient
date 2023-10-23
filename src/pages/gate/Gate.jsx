import React from "react";
import "./Gate.css";
import gateImage from "../../assets/gate.png";
import GameHeader from "../../components/gameHeader/GameHeaedr";
import Main from "../../components/main/Main";
import LockerGate from "../../components/lockerGate/LockerGate";
import UnsolvedLockerGate from "../../components/unsolvedLockerGate/UnsolvedLockerGate";
import BottomHechti from "../../components/bottomHechti/BottomHechti";
import Button from "../../components/button/Button";
import ImageGate from "../../components/imageGate/ImageGate";
import UnsolvedImageGate from "../../components/unsolvedImageGate/UnsolvedImageGate";
import img1 from "../../assets/img1.jpg";

export default function Gate(props) {
	const readyToSolve = true;
	return (
		<>
			<GameHeader />
			<Main bubble="down">
				<h2>המעבר חסום!</h2>
				<img
					src={gateImage}
					alt="gate image"
				/>
				{readyToSolve ? (
					<>
						<p>סדרו את חלקי הפאזל לכדי תמונה שלמה</p>
						<ImageGate src={img1} />
					</>
				) : (
					<>
						<p>
							כדי לעבור את השער נדרש קוד. לחצו על הריבועים, ענו על השאלות ופתרו
							את הפאזל.
						</p>
						<UnsolvedImageGate games={["", "", "", "", "", "", "", "", ""]} />
					</>
				)}

				{/*readyToSolve ? (
					<>
						<p>
							בחרו את הפתרון המתאים לכל ריבוע, כך שתפצחו את הקוד לפתיחת השער אם
							הצלחתם בנסיון הראשון, תזכו ב-300 מטבעות נוספים!
						</p>
						<LockerGate />
					</>
				) : (
					<>
						<p>
							כדי לעבור את השער נדרש קוד. לחצו על הריבועים, ענו על השאלות ופצחו
							את הקוד.
						</p>
						<UnsolvedLockerGate games={["", "", "", ""]} />
					</>
				)*/}
			</Main>
			<BottomHechti />
		</>
	);
}
