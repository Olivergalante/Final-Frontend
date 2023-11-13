import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ExpandedPost = () => {
	const { postId } = useParams();
	const [post, setPost] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		// Fetch the specific post based on postId
		const fetchPostById = async () => {
			try {
				const response = await fetch(`http://127.0.0.1:8000/posts/${postId}`);
				const data = await response.json();
				setPost(data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching expanded post:", error);
				setIsLoading(false);
			}
		};

		fetchPostById();
	}, [postId]);

	const handleDelete = () => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this post?"
		);

		if (confirmDelete) {
			// Set a loading state while the delete operation is in progress
			setIsLoading(true);

			// Make a DELETE request to your API endpoint
			fetch(`http://127.0.0.1:8000/posts/${postId}`, {
				method: "DELETE",
			})
				.then((response) => {
					if (response.ok) {
						navigate("/mainpage");
						// Redirect back to the main page after successful deletion
					} else {
						console.error("Error deleting post");
					}

					// Reset loading state
					setIsLoading(false);
				})
				.catch((error) => {
					console.error("Error deleting post:", error);

					// Reset loading state
					setIsLoading(false);
				});
		}
	};

	const handleBack = () => {
		navigate("/mainpage");
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (!post) {
		return <p>Post not found.</p>;
	}

	return (
		<div className="expanded-post-container">
			<div className="expanded-post">
				<h2>{post.title}</h2>
				{post.image && (
					<img src={post.image} alt={post.title} className="expanded-image" />
				)}
				<p>{post.content}</p>
				<div className="post-details">
					<span>{post.username} </span>
					<span>Date: {new Date(post.created_at).toLocaleDateString()}</span>
				</div>
			</div>
			<button onClick={handleDelete}>Delete</button>
			<button onClick={handleBack}>Back</button>
		</div>
	);
};

export default ExpandedPost;
