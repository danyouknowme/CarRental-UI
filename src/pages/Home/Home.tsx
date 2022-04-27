import React, { useState, useEffect } from "react";
import { Navbar, FilteredBrand, Table, AddButton } from "../../components";
import { ICar } from "../../types";
import cars from "../../data/cars.json";
import "./home.scss";

const Home: React.FC = () => {
	const [brandSelected, setBrandSelected] = useState<string>("");
	const [carsData, setCarsData] = useState<ICar[]>(cars);

	useEffect(() => {
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
				<AddButton />
			</div>
		</>
	);
};

export default Home;
