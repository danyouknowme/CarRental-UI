import React, { useState, useEffect } from "react";
import { Navbar, FilteredBrand, Card } from "./components";
import "./App.scss";

const App: React.FC = () => {
	const [brandSelected, setBrandSelected] = useState<string>("");

	useEffect(() => {
		// fetching new data after brand has been changed
		console.log(brandSelected);
	}, [brandSelected]);

	return (
		<>
			<Navbar />
			<div className="body__container">
				<FilteredBrand
					brandSelected={brandSelected}
					setBrandSelected={setBrandSelected}
				/>
				<div className="grid__container">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default App;
