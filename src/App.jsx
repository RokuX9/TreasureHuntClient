import { useState } from "react";
import Welcome from "./pages/welcome/Welcome";
import GroupSelect from "./pages/groupSelect/GroupSelect";
import GameSelect from "./pages/gameSelect/GameSelect";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Welcome />}
				/>
				<Route
					path="/groupselect"
					element={<GroupSelect />}
				/>
				<Route
					path="/gameselect"
					element={<GameSelect />}
				/>
			</Routes>
		</>
	);
}

export default App;
