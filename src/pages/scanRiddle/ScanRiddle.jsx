import React from "react";
import "./ScanRiddle.css";
import anchorImage from "../../assets/anchor.png";
import GameHeader from "../../components/gameHeader/GameHeaedr";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";
import BottomHechti from "../../components/bottomHechti/BottomHechti";
import Overlay from "../../components/overlay/Overlay";
import QRScanner from "../../components/qrScanner/QRScanner";
import WrongScan from "../../components/wrongScan/WrongScan";

export default function ScanRiddle({
	coinsAmount,
	level,
	gameName,
	navigate,
	...props
}) {
	const answer = "0";
	const [qrScannerOpen, setQrScannerOpen] = React.useState(false);
	const [wrongScanOpen, setWrongScanOpen] = React.useState(false);

	const closeQrScanner = () => {
		setQrScannerOpen(false);
	};

	const closeWrongScan = () => {
		setWrongScanOpen(false);
	};

	const openWrongScan = () => {
		setWrongScanOpen(true);
	};

	const correct = () => {
		closeQrScanner();
		closeWrongScan();
		navigate("/solveriddle");
	};

	return (
		<>
			<GameHeader
				coinsAmount={coinsAmount}
				level={level}
				gameName={gameName}
			/>
			<Main
				bubble="down"
				className="scan_riddle__main"
			>
				<p className="scan_riddle__clue">
					אתם מוזמנים להתחיל במסע של גילוי מחקר והנאה, בעקבות אוצרות הים. מצאו
					את העוגן בתערוכת הפניקים (ליד דגם של ספינה עם קנקנים)
				</p>
				<img
					src={anchorImage}
					alt="anchor symbol"
				/>
				<p className="scan_riddle__instructions">
					מצאו את העמדה והפריט/ים! הגעתם לעמדה? סרקו את הברקוד!
				</p>
				<Button
					onClick={() => {
						setQrScannerOpen(true);
					}}
				>
					סרוק קוד
				</Button>
				<QRScanner
					isOpen={qrScannerOpen}
					closeOverlay={closeQrScanner}
					openWrongScan={openWrongScan}
					answer={answer}
					correct={correct}
				/>
				<WrongScan
					isOpen={wrongScanOpen}
					closeOverlay={closeWrongScan}
				/>
			</Main>
			<BottomHechti />
		</>
	);
}

//
