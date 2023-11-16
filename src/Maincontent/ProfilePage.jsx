import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const ProfilePage = () => {
	const [bio, setBio] = useState("");
	const [location, setLocation] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const userId = localStorage.getItem("userId");
	const navigate = useNavigate();

	useEffect(() => {
		fetchProfileData();
	}, []);

	const fetchProfileData = async () => {
		try {
			const response = await fetch(`http://127.0.0.1:8000/profiles/${userId}/`);
			const data = await response.json();

			if (data && data.bio && data.location && data.birth_date) {
				setBio(data.bio);
				setLocation(data.location);
				setBirthDate(data.birth_date);
			} else {
				console.error("Invalid profile data structure:", data);
			}
		} catch (error) {
			console.error("Error fetching profile data:", error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const formData = new FormData();
			formData.append("user", userId);
			formData.append("bio", bio);
			formData.append("location", location);
			formData.append("birth_date", birthDate);

			const response = await fetch(
				`http://127.0.0.1:8000/profiles/${userId}/`,
				{
					method: "PUT",
					body: formData,
				}
			);

			if (response.ok) {
				fetchProfileData();
			} else {
				console.error("Error updating profile data:", response.statusText);
			}
		} catch (error) {
			console.error("Error updating profile data:", error);
		}
	};

	const handleBack = () => {
		navigate("/mainpage");
	};

	return (
		<div>
			<NavBar className="navbar-content-page" showFeatures={true} />
			<div className="profile-page-content">
				<h1>Profile Page</h1>
				<form onSubmit={handleSubmit}>
					<label>
						Bio:
						<textarea
							placeholder="Years of experience and what do you ride"
							onChange={(e) => setBio(e.target.value)}
						/>
					</label>
					<br />
					<label>
						Location:
						<input type="text" onChange={(e) => setLocation(e.target.value)} />
					</label>
					<br />
					<label>
						Birth Date:
						<input type="date" onChange={(e) => setBirthDate(e.target.value)} />
					</label>
					<br />
					<button className="update-profile-button" type="submit">
						Update Profile
					</button>
					<button
						className="back-profile-update-button"
						type="button"
						onClick={handleBack}
					>
						Back
					</button>
				</form>
				<div>
					<h2>Profile Information</h2>
					<p>Bio: {bio}</p>
					<p>Location: {location}</p>
					<p>Birth Date: {birthDate}</p>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
