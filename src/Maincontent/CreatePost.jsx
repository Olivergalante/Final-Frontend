import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
	const MAX_TITLE_LENGTH = 100;
	const MAX_CONTENT_LENGTH = 1000;

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [image, setImage] = useState(null);
	const [titleCharCount, setTitleCharCount] = useState(MAX_TITLE_LENGTH);
	const [contentCharCount, setContentCharCount] = useState(MAX_CONTENT_LENGTH);

	const navigate = useNavigate();

	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
	};

	const handlePost = () => {
		const userId = localStorage.getItem("userId");
		const endpoint = "http://127.0.0.1:8000/posts/";

		const formData = new FormData();
		formData.append("title", title);
		formData.append("content", content);
		formData.append("author", userId);
		// Check if image is not null before appending it to the form data
		if (image) {
			formData.append("image", image);
		}
		formData.append("username", localStorage.getItem("username"));

		fetch(endpoint, {
			method: "POST",
			body: formData,
		})
			.then((response) => response.json())
			.then((data) => {
				navigate("/mainpage");
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	const handleBack = () => {
		navigate("/mainpage");
	};

	const handleTitleChange = (e) => {
		const newTitle = e.target.value;
		setTitle(newTitle);
		setTitleCharCount(MAX_TITLE_LENGTH - newTitle.length);
	};

	const handleContentChange = (e) => {
		const newContent = e.target.value;
		setContent(newContent);
		setContentCharCount(MAX_CONTENT_LENGTH - newContent.length);
	};

	return (
		<div className="new-post-section">
			<h1 className="header">Create New Post</h1>
			<div className="post-content-inputs">
				<input
					className="input-title"
					type="text"
					placeholder="Title"
					value={title}
					onChange={handleTitleChange}
				/>
				<div className="char-count">
					Title Characters Remaining: {titleCharCount}
				</div>
				<textarea
					className="input-content"
					placeholder="Content"
					value={content}
					onChange={handleContentChange}
				/>
				<div className="char-count">
					Content Characters Remaining: {contentCharCount}
				</div>
				<input
					type="file"
					name="image_url"
					accept="image/jpeg, image/png, image/gif"
					onChange={handleImageChange}
				/>
			</div>
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
