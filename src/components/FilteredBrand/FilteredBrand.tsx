import React from "react";
import Dropdown from "react-dropdown";
import { IFilteredBrand } from "../../types";
import "./filtered-brand.scss";
import "react-dropdown/style.css";

const options = [
	"TOYOTA",
	"IZUSU",
	"HONDA",
	"MITSUBISHI",
	"NISSAN",
	"MERCEDES-BENZ",
	"BMW",
];

const FilteredBrand: React.FC<IFilteredBrand> = ({
	brandSelected,
	setBrandSelected,
}) => {
	return (
		<div className="filtered_brand__container">
			<div className="filtered_brand__wrapper">
				<Dropdown
					options={options}
					onChange={(e) => setBrandSelected(e.value)}
					value={brandSelected}
					placeholder="Select the car brand"
				/>
			</div>
		</div>
	);
};

export default FilteredBrand;
