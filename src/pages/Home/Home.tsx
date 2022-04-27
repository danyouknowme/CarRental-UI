import React, { useState, useEffect } from "react";
import { Navbar, FilteredBrand, Table } from "../../components";
import "./home.scss";

const carsData = [
	{ brand: "TOYOTA", model: "CAMRY YEAR (06-12)", price: 1400 },
	{ brand: "MERCEDES-BENZ", model: "E-CLASS W 207 (YEAR09-12)", price: 6700 },
	{ brand: "	BMW", model: "	I8", price: 49000 },
];

const Home: React.FC = () => {
	const [brandSelected, setBrandSelected] = useState<string>("");

	useEffect(() => {
		// fetching new data after brand has been changed
		console.log(brandSelected);
	}, [brandSelected]);

	return (
		<>
			<Navbar />
			<div className="home__container">
				<div className="search__container">
					<input type="text" placeholder="Search for car brand or models..." />
					<FilteredBrand
						brandSelected={brandSelected}
						setBrandSelected={setBrandSelected}
					/>
				</div>
				<div className="table__container">
					<Table carsData={carsData} />
				</div>
			</div>
		</>
	);
};

export default Home;
