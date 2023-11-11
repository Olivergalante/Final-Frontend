// where all of the post and images will be displayed to the screen !!
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExpandedPost from "./ExpandedPost";

function MainPage() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Make a GET request to your API endpoint
		fetch("http://127.0.0.1:8000/posts")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data); // Update the state with the retrieved posts
				setIsLoading(false); // Mark loading as complete
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setIsLoading(false); // Handle error and mark loading as complete
			});
	}, []);

	// Function to format the date
	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "short", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};
	return (
		<div className="blog-post-rendered">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				// Where post is published
				<div className="blog-post">
					{posts.map((post) => (
						<Link to={`/posts/${post.id}`} key={post.id} className="post-link">
							<div className="post-card">
								<h2>{post.title}</h2>
								{post.image && (
									<img
										className="post-image"
										src={post.image}
										alt={post.title}
									/>
								)}
								<p>{post.content}</p>

								<div>
									<span>{post.username} </span>
									<span>Date: {formatDate(post.created_at)}</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}

export default MainPage;
