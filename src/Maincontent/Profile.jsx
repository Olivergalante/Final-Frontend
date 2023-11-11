// Profile.js Where the username and post button to the post page are displayed !
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExpandedPost from "./ExpandedPost";

const Profile = () => {
	const [userData, setUserData] = useState(null);
	const userId = localStorage.getItem("userId"); // Get the userId from local storage
	const userName = localStorage.getItem("username"); // Get the userName from local storage
	useEffect(() => {
		const url = `http://127.0.0.1:8000/profiles/${userId}`; // Make a GET request to your API endpoint with the userId
		fetch(url)
			.then((response) => response.json())
			.then((data) => setUserData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, [userId]); // Only re-run this effect if the userId changes

	return (
		// Here is where the User name is displayed
		<div className="profile-section">
			{userData && (
				<div className="profile-user-name">
					<h1>Hello {userName}</h1>
				</div>
			)}
			<Link to="/createpost">
				<button className="post-blog-button"> Post </button>
			</Link>
		</div>
	);
};

export default Profile;
