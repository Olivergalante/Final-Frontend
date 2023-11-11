import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExpandedPost = () => {
	const { postId } = useParams();
	const [post, setPost] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

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
		</div>
	);
};

export default ExpandedPost;
