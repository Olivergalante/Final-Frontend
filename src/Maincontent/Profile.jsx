// Profile.js
import React, { useState, useEffect } from "react";

const Profile = () => {
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const url = "http://127.0.0.1:8000/profiles/";
		fetch(url)
			.then((response) => response.json())
			.then((data) => setUserData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className="profile-section" style={{ width: "25%" }}>
			{userData && (
				<div>
					<img src={userData.profileImage} alt="Profile" />
					<h2>{userData.name}</h2>
					<p>{userData.bio}</p>
					{/* Add more profile information here */}
				</div>
			)}
		</div>
	);
};

export default Profile;
