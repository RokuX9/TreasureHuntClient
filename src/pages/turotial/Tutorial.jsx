import React from "react";
import "./Tutorial.css";
import HechtiHeader from "../../components/hechtiHeader/HechtiHeader";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";
import coinsIcon from "../../assets/coins.png";
import questionIcon from "../../assets/question.png";
import compassIcon from "../../assets/compass.png";

export default function Tutorial({ navigate, ...props }) {
	const [page, setPage] = React.useState(0);

	const content = [
		<>
			<p className="tutorial__text">עקבו אחר הרמז אל מיקום הפריט,</p>
			<p className="tutorial__text">
				סרקו את קוד ה-QR הסמוך לו, וענו על השאלה.
			</p>
			<p className="tutorial__text">בדרך אספו כמה שיותר מטבעות.</p>
			<p className="tutorial__text">
				בכל נסיון נוסף, יופחתו המטבעות בהם תוכלו לזכות.
			</p>
		</>,
		<>
			<p className="tutorial__text">
				תשובה נכונה תזכה אתכם ב-300 מטבעות זהב
				<img
					className="tutorial__icon"
					src={coinsIcon}
					alt="coins icon"
				/>
			</p>
			<p className="tutorial__text">כאשר בכל נסיון נוסף, יפחתו המטבעות</p>
			<p className="tutorial__text">צריכים לקרוא שוב את ההוראות?</p>
			<p className="tutorial__text">
				לחצו על הסימן
				<img
					className="tutorial__icon"
					src={questionIcon}
					alt="question mark icon"
				/>
			</p>
			<p className="tutorial__text">
				צריכים עזרה להתמצא? לחצו על הסימן
				<img
					className="tutorial__icon"
					src={compassIcon}
					alt="compass icon"
				/>
			</p>
		</>,
	];

	return (
		<>
			<HechtiHeader />
			<Main
				bubble="up"
				className="tutorial__main"
			>
				{content[page]}
				{page === 0 ? (
					<Button onClick={() => setPage(1)}>המשך</Button>
				) : (
					<Button onClick={() => navigate("/scanriddle")}>התחילו לשחק</Button>
				)}
			</Main>
		</>
	);
}
