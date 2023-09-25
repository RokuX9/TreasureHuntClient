import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import GroupSelect from "./pages/groupSelect/GroupSelect";
import GameSelect from "./pages/gameSelect/GameSelect";
import Tutorial from "./pages/turotial/Tutorial";
import ScanRiddle from "./pages/scanRiddle/ScanRiddle";
import SolveRiddle from "./pages/solveRiddle/SolveRiddle";

function App() {
	const [gameState, setGameState] = React.useState({
		gameId: 0,
		gameName: "",
		playerName: "",
		coinsAmount: 0,
		level: 0,
		gate: { type: "", stations: [{ id: 0, solved: false }] },
	});

	const navigate = useNavigate();

	const setNewGame = (gameName, gameId, playerName) => {
		setGameState((prevState) => {
			return { gameName, gameId, playerName, coinsAmount: 0, level: 0 };
		});
		navigate("/tutorial");
	};

	const addCoins = (amount) => {
		setGameState((prevState) => {
			return { coinsAmount: prevState.coinsAmount + amount, ...prevState };
		});
	};

	const levelUp = () => {
		setGameState((prevState) => {
			return { level: prevState.level + 1, ...prevState };
		});
	};

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Welcome navigate={navigate} />}
				/>
				<Route
					path="/groupselect"
					element={<GroupSelect setNewGame={setNewGame} />}
				/>
				<Route
					path="/gameselect"
					element={<GameSelect setNewGame={setNewGame} />}
				/>
				<Route
					path="/tutorial"
					element={<Tutorial navigate={navigate} />}
				/>
				<Route
					path="/scanriddle"
					element={
						<ScanRiddle
							coinsAmount={gameState.coinsAmount}
							level={gameState.level}
							gameName={gameState.gameName}
							navigate={navigate}
						/>
					}
				/>
				<Route
					path="/solveriddle"
					element={
						<SolveRiddle
							coinsAmount={gameState.coinsAmount}
							level={gameState.level}
							gameName={gameState.gameName}
							navigate={navigate}
							addCoins={addCoins}
							levelUp={levelUp}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
