import React from "react";
import Profile from "./Profile";
import Content from "./Content";
import "./Content.css";

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
