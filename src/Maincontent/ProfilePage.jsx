import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
	// State variables for form data
	const [bio, setBio] = useState("");
	const [location, setLocation] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const userId = localStorage.getItem("userId");
	// Assuming you store userId in local storage

	// Fetch profile data on component mount
	useEffect(() => {
		fetchProfileData();
	}, []);

	// Function to fetch profile data
	const fetchProfileData = async () => {
		try {
			const response = await fetch(`http://127.0.0.1:8000/profiles/${userId}/`);
			const data = await response.json();

			// Check if data is an object with expected properties
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

	// Function to handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Get the access token from local storage
			const accessToken = localStorage.getItem("access_token");

			// Make a PATCH request to update the profile data
			const response = await fetch(
				`http://127.0.0.1:8000/profiles/${userId}/`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`, // Include the access token in the Bearer header
					},
					body: JSON.stringify({
						user: userId,
						bio,
						location,
						birth_date: birthDate,
					}),
				}
			);

			// Check if the request was successful
			if (response.ok) {
				// Fetch and display the updated profile data
				fetchProfileData();
			} else {
				console.error("Error updating profile data:", response.statusText);
			}
		} catch (error) {
			console.error("Error updating profile data:", error);
		}
	};
	const navigate = useNavigate();
	const handleBack = () => {
		navigate("/mainpage");
	};

	return (
		<div>
			<h1>Profile Page</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Bio:
					<textarea
						placeholder="Years of experiance and what do you ride"
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
					{birthDate}
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
					{" "}
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
	);
};

export default ProfilePage;
