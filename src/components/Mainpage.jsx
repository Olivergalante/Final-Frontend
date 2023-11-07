import React from "react";
import Profile from "../Maincontent/Profile";
import Content from "../Maincontent/Content";
import "../Maincontent/mainpage.css";

export function MainPage() {
	return (
		<>
			<h1>
				This is the main page content you should see after creating a user or
				logging in again
			</h1>
			<Profile />
			<Content />
		</>
	);
}
