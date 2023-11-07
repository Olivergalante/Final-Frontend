import React from "react";
import Profile from "./Profile";
import Content from "./Content";
import "./mainpage.css";

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
