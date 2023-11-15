import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ExpandedPost = () => {
	const { postId } = useParams();
	const [post, setPost] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const postResponse = await fetch(
					`http://127.0.0.1:8000/posts/${postId}`
				);
				const postData = await postResponse.json();

				setPost(postData);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching expanded post:", error);
				setIsLoading(false);
			}
		};

		fetchPost(); // Call the function
	}, [postId]);

	const handleDelete = () => {
		const userId = localStorage.getItem("userId");

		fetch(`http://127.0.0.1:8000/posts/${postId}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${userId}`, // Include authorization if required
			},
		})
			.then((response) => {
				if (response.ok) {
					// Post deleted successfully, navigate back to mainpage
					navigate("/mainpage");
				} else {
					// Handle error, for example, show an error message
					console.error("Error deleting post:", response.statusText);
				}
			})
			.catch((error) => {
				console.error("Error deleting post:", error);
			});
	};

	const handleEdit = () => {
		// Redirect to the edit page with the postId
		navigate(`/posts/${postId}/edit`);
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
			<button onClick={handleEdit}>Edit</button>
			<button onClick={handleBack}>Back</button>
		</div>
	);
};

export default ExpandedPost;
