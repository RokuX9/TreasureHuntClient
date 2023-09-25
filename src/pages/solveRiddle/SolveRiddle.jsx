import React from "react";
import "./SolveRiddle.css";
import anchorIcon from "../../assets/anchor.png";
import GameHeader from "../../components/gameHeader/GameHeaedr";
import Main from "../../components/main/Main";
import RiddleAnswer from "../../components/riddleAnswer/RiddleAnswer";
import BottomHechti from "../../components/bottomHechti/BottomHechti";
import WrongAnswer from "../../components/wrongAnswer/WrongAnswer";
import RightAnswer from "../../components/rightAnswer/RightAnswer";

const templateAnswers = [
	"לעוגן הפניקי שלושה חורים",
	"העוגן נתגלה במפרץ עכו",
	"על העוגן חרוטה אות יוונית",
];

const correctAnswer = 0;

export default function SolveRiddle({
	coinsAmount,
	level,
	gameName,
	navigate,
	...props
}) {
	const [openWrongAnswer, setOpenWrongAnswer] = React.useState(false);
	const [openRightAnswer, setOpenRightAnswer] = React.useState(false);
	const [hideMoneybag, setHideMoneybag] = React.useState(false);
	const [amount, setAmount] = React.useState(300);

	const closeWrongAnswer = () => {
		setOpenWrongAnswer(false);
		setHideMoneybag(false);
	};

	const closeRightAnswer = () => {
		setOpenRightAnswer(false);
		setHideMoneybag(false);
	};

	const checkAnswer = (answer) => {
		setHideMoneybag(true);
		if (answer === correctAnswer) {
			setOpenRightAnswer(true);
		} else {
			setOpenWrongAnswer(true);
		}
	};

	return (
		<>
			<GameHeader
				coinsAmount={coinsAmount}
				level={level}
				gameName={gameName}
			/>
			<Main
				className="solve_riddle__main"
				bubble="down"
			>
				<p className="solve_riddle__instructions">
					קראו את כתובית המידע בעמדה וסמנו את המשפט הנכון:
				</p>
				<div className="solve_riddle__answer_bank">
					{templateAnswers.map((answer, i) => (
						<RiddleAnswer
							order={i + 1}
							content={answer}
							onClick={() => {
								checkAnswer(i);
							}}
							key={i}
						/>
					))}
				</div>
				<img
					src={anchorIcon}
					alt="anchor image"
				/>
				<WrongAnswer
					isOpen={openWrongAnswer}
					closeOverlay={closeWrongAnswer}
				/>
				<RightAnswer
					isOpen={openRightAnswer}
					amount={amount}
				/>
			</Main>
			<BottomHechti
				hide={hideMoneybag}
				amount={amount}
			/>
		</>
	);
}
