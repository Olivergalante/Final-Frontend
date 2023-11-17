import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
	const [userData, setUserData] = useState(null);
	const [bio, setBio] = useState("");
	const [location, setLocation] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const userId = localStorage.getItem("userId");
	const userName = localStorage.getItem("username");

	useEffect(() => {
		const url = `http://127.0.0.1:8000/profiles/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setUserData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, [userId]);

	useEffect(() => {
		// Update bio, location, and birthDate when userData changes
		if (userData) {
			setBio(userData.bio || ""); // Default to an empty string if bio is null or undefined
			setLocation(userData.location || "");
			setBirthDate(userData.birth_date || "");
		}
	}, [userData]);

	return (
		<div className="profile-section">
			{userData && (
				<div className="profile-user-name">
					<h1>Hello {userName}</h1>
				</div>
			)}
			<Link to="/createpost">
				<button className="post-blog-button">Post</button>
			</Link>

			<div>
				<div>
					<h2>Profile Information</h2>
					<Link to="/profilepage">
						<button className="post-blog-button">Profile</button>
					</Link>
					<p>Bio: {bio}</p>
					<p>Location: {location}</p>
					<p>Birth Date: {birthDate}</p>
					<Link to="/">
						<button className="post-blog-button"> Logout </button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Profile;
