import React, { useState } from "react";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handlePost = () => {
		// Implement the POST request here using fetch.
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
			<button>Post</button>
		</div>
	);
};

export default CreatePost;
