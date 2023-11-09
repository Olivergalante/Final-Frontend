import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
	const [title, setTitle] = useState(""); // State variable for title
	const [content, setContent] = useState(""); // State variable for content

	const navigate = useNavigate();
	const handlePost = () => {
		const userId = localStorage.getItem("userId"); // Get the userId from local storage
		const endpoint = "http://127.0.0.1:8000/posts/";

		// Define the data you want to send in the request
		const postData = {
			title: title, // Use the state variable for title
			content: content, // Use the state variable for content
			author: userId, // Use the userId from local storage
		};

		// Make the POST request using the fetch API
		fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(postData),
		})
			.then((response) => response.json())
			.then((data) => {
				// Handle the response from the server here
				console.log(data);
				navigate("/mainpage");
			})
			.catch((error) => {
				// Handle any errors here
				console.error("Error:", error);
			});
	};

	const handleBack = () => {
		navigate("/mainpage");
	};

	return (
		<div className="new-post-section">
			<h1 className="header">Create New Post</h1>
			<input
				className="input-title"
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				className="input-content"
				placeholder="Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<div className="button-container">
				<button className="button-post" onClick={handlePost}>
					Post
				</button>
				<div className="button-post-back">
					<button onClick={handleBack}>Back</button>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
