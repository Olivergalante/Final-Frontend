// Profile.js
import React, { useState, useEffect } from "react";

const Profile = () => {
	const [userData, setUserData] = useState(null);
	const userId = localStorage.getItem("userId"); // Get the userId from local storage
	const userName = localStorage.getItem("username"); // Get the username from local storage

	useEffect(() => {
		const url = `http://127.0.0.1:8000/profiles/${userId}`; // Make a GET request to your API endpoint with the userId
		fetch(url)
			.then((response) => response.json())
			.then((data) => setUserData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, [userId]); // Only re-run this effect if the userId changes

	return (
		<div className="profile-section">
			{userData && (
				<div className="profile-user-name">
					<h1>Hello {userName}</h1>
					{/* Add more profile information here */}
				</div>
			)}
			<button className="post-blog-button"> Post </button>
		</div>
	);
};

export default Profile;
