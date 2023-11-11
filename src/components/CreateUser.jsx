import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateUser() {
	const [userData, setUserData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const user = {
			username: userData.username,
			email: userData.email,
			password: userData.password,
		};

		fetch("http://127.0.0.1:8000/register/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				navigate("/");
				console.log(data);
			});
	};

	return (
		<div className="form">
			<h2>Register</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group-username">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						value={userData.username}
						onChange={handleInputChange}
						className="form-control"
					/>
				</div>

				<div className="form-group-email">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={userData.email}
						onChange={handleInputChange}
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						value={userData.password}
						onChange={handleInputChange}
						className="form-control"
					/>
				</div>

				<button className="btn btn-primary" type="submit">
					Register
				</button>
			</form>
			<p className="text-center">
				If you already have an account, <a href="/">login</a> instead.
			</p>
		</div>
	);
}
