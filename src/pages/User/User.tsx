import React from "react";
import { Navbar, Accordion } from "../../components";
import "./user.scss";

const User: React.FC = () => {
	const usersData = [
		{
			firstName: "Thanathip",
			lastName: "Suwannakhot",
			age: 20,
			phone: "0951683442",
		},
		{
			firstName: "Sirawich",
			lastName: "Tumtamai",
			age: 21,
			phone: "0951683442",
		},
		{ firstName: "Bhokin", lastName: "Tumtamai", age: 19, phone: "0951683442" },
		{
			firstName: "Poomtum",
			lastName: "Tumtamai",
			age: 22,
			phone: "0951683442",
		},
	];

	return (
		<>
			<Navbar />
			<div className="users__container">
				<div className="user__text">
					<h1>Users</h1>
				</div>
				<div className="user_data__container">
					<Accordion usersData={usersData} />
				</div>
			</div>
		</>
	);
};

export default User;
