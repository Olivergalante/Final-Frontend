// where the title and content of the post are being created. Now has section for images !!
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [image, setImage] = useState(null);

	const navigate = useNavigate();

	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
		console.log(image);
	};

	const handlePost = () => {
		const userId = localStorage.getItem("userId");
		const endpoint = "http://127.0.0.1:8000/posts/";

		const formData = new FormData();
		formData.append("title", title);
		formData.append("content", content);
		formData.append("author", userId);
		formData.append("image", image);
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

	return (
		<div className="new-post-section">
			<h1 className="header">Create New Post</h1>
			<input
				// Title name
				className="input-title"
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				// Content for the new post
				className="input-content"
				placeholder="Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<input
				// Image field for the new post
				type="file"
				name="image_url"
				accept="image/jpeg, image/png, image/gif"
				onChange={handleImageChange}
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
