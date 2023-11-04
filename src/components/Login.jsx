import { useState } from "react";

export function LoginForm() {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleChangeUsername = (e) => {
		setUserName(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			username,
			password,
		};
		console.log(user);
		const url = "http://localhost:8000/login/";
		const data = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((response) => response.json());

		const { access, refresh } = data;
		localStorage.clear();
		localStorage.setItem("access_token", access);
		localStorage.setItem("refresh_token", refresh);
	};

	return (
		<>
			<h3> Login </h3>
			<form onSubmit={handleSubmit}>
				<label>
					Username
					<input
						type="text"
						name="username"
						value={username}
						onChange={handleChangeUsername}
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						value={password}
						onChange={handleChangePassword}
					/>
				</label>
				<button type="submit">Login</button>
				<p className="text-center">
					If you don't have an account, <a href="/createuser">register </a>
					instead.
				</p>
			</form>
		</>
	);
}
