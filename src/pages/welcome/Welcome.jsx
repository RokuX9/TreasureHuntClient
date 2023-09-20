import React from "react";
import "./Welcome.css";
import vaseMain from "../../assets/vaseMain.png";
import HechtiHeader from "../../components/hechtiHeader/HechtiHeader";
import Main from "../../components/main/Main";
import Button from "../../components/button/Button";
import Overlay from "../../components/overlay/Overlay";

export default function Welcome(props) {
	const [openOverlay, setOpenOverlay] = React.useState(false);

	return (
		<>
			<HechtiHeader />
			<Main
				className="welcome__main"
				bubble="up"
			>
				<p className="main__text">
					ברוכים הבאים למערכת המשחקים של מוזיאון הכט!
				</p>
				<div className="vase_container">
					<img
						src={vaseMain}
						alt="Vase picture"
					/>
				</div>
				<div className="buttons_row">
					<Button>בואו נתחיל</Button>
					<button
						className="language__button"
						onClick={() => {
							setOpenOverlay(true);
						}}
					/>
				</div>
			</Main>
		</>
	);
}
