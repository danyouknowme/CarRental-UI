import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, User } from "./pages";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/users" element={<User />}></Route>
		</Routes>
	);
};

export default App;
