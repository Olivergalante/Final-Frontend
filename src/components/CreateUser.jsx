import React, { Component } from "react";
import { Navigate } from "react-router";

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
		};
	}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const user = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
		};
		fetch("http://127.0.0.1:8000/register/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((response) => {
				if (response.status === 201) {
					// Registration was successful, navigate to the login page
					window.location.href = <Navigate replace to="/login" />; // Use the appropriate URL for your login page
				} else {
					return response.json();
				}
			})
			.then((data) => {
				if (data) {
					console.log(data); // Handle registration errors, e.g., display error messages
				}
			})
			.catch((error) => {
				console.error("There was an error:", error);
			});
	};

	render() {
		return (
			<div className="container py-5">
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							name="username"
							value={this.state.username}
							onChange={this.handleInputChange}
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={this.state.email}
							onChange={this.handleInputChange}
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={this.state.password}
							onChange={this.handleInputChange}
							className="form-control"
						/>
					</div>

					<button className="btn btn-primary" type="submit">
						Register
					</button>
				</form>
				<p className="text-center">
					If you already have an account, <a href="./Login">login</a> instead.
				</p>
			</div>
		);
	}
}

export default RegisterForm;
