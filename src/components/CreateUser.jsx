import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateUser() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		const navigate = useNavigate();
		event.preventDefault();
		const user = {
			username: formData.username,
			email: formData.email,
			password: formData.password,
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
		<div className="register-form">
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						value={formData.username}
						onChange={handleInputChange}
						className="form-control"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
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
						value={formData.password}
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
