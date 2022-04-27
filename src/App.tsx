import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, User } from "./pages";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	typography: {
		fontFamily: ["Inter", "sans-serif"].join(","),
	},
});

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/users" element={<User />}></Route>
			</Routes>
		</ThemeProvider>
	);
};

export default App;
