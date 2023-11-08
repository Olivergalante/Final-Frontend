import React, { useState } from "react";

const CreatePost = () => {
	const [title, setTitle] = useState(""); // State variable for title
	const [content, setContent] = useState(""); // State variable for content

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
			})
			.catch((error) => {
				// Handle any errors here
				console.error("Error:", error);
			});
	};

	return (
		<div className="new-post-section">
			<h1>Create New Post</h1>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<button onClick={handlePost}>Post</button>
		</div>
	);
};

export default CreatePost;
