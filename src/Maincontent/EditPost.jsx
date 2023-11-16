import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
	const { postId } = useParams();
	const [post, setPost] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [updatedTitle, setUpdatedTitle] = useState("");
	const [updatedContent, setUpdatedContent] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const postResponse = await fetch(
					`http://127.0.0.1:8000/posts/${postId}`
				);
				const postData = await postResponse.json();

				setPost(postData);
				setUpdatedTitle(postData.title);
				setUpdatedContent(postData.content);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching post for editing:", error);
				setIsLoading(false);
			}
		};

		fetchPost(); // Call the function
	}, [postId]);

	const handleUpdate = () => {
		const userId = localStorage.getItem("userId");

		const formData = new FormData();
		formData.append("title", updatedTitle);
		formData.append("content", updatedContent);
		formData.append("author", userId); // Set the author field

		fetch(`http://127.0.0.1:8000/posts/${postId}/`, {
			method: "PUT",
			body: formData,
		})
			.then((response) => {
				if (response.ok) {
					// Post updated successfully, navigate back to expanded post page
					navigate(`/posts/${postId}`);
				} else {
					// Handle error, for example, show an error message
					console.error("Error updating post:", response.statusText);
				}
			})
			.catch((error) => {
				console.error("Error updating post:", error);
			});
	};

	const handleCancel = () => {
		// Navigate back to the expanded post page without making any updates
		navigate(`/posts/${postId}`);
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (!post) {
		return <p>Post not found.</p>;
	}

	return (
		<div className="edit-post-container">
			<div className="edit-post-container">
				<h2>Edit Post</h2>
				<label htmlFor="updatedTitle">Title:</label>
				<input
					type="text"
					id="updatedTitle"
					value={updatedTitle}
					onChange={(e) => setUpdatedTitle(e.target.value)}
				/>
				<label htmlFor="updatedContent">Content:</label>
				<textarea
					id="updatedContent"
					value={updatedContent}
					onChange={(e) => setUpdatedContent(e.target.value)}
				/>
				<button className="editpost-update-button" onClick={handleUpdate}>
					Update
				</button>
				<button onClick={handleCancel}>Cancel</button>
			</div>
		</div>
	);
};

export default EditPost;
