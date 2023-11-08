import React from "react";
import Profile from "./Profile";
import Content from "./Content";
import "./mainpage.css";

export function MainPage() {
	return (
		<div className="main-page-wrapper">
			<Profile />
			<Content />
		</div>
	);
}
