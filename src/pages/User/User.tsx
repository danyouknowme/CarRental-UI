import React from "react";
import { Navbar, Accordion } from "../../components";
import users from "../../data/users.json";
import "./user.scss";

const User: React.FC = () => {
	return (
		<>
			<Navbar />
			<div className="users__container">
				<div className="user__text">
					<h1>Users</h1>
				</div>
				<div className="user_data__container">
					{/* {JSON.stringify(typeof users[0].phone)} */}
					<Accordion usersData={users} />
				</div>
			</div>
		</>
	);
};

export default User;
