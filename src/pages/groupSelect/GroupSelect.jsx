import React from "react";
import "./GroupSelect.css";
import HechtiHeader from "../../components/hechtiHeader/HechtiHeader";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";

export default function GroupSelect(props) {
	return (
		<>
			<HechtiHeader />
			<Main
				className="group__main"
				bubble="up"
			>
				<div className="group__row">
					<p className="group__text">בחרו קבוצה</p>
					<select className="group__select">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</div>
				<Button>המשך</Button>
			</Main>
		</>
	);
}
