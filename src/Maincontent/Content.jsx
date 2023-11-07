import React, { useState, useEffect } from "react";

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

	return (
		<div>
			<h1>Main Page</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div className="blog-post">
					<ul>
						{posts.map((post) => (
							<li key={post.id}>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
								<div>
									<span>Author: {post.author}</span>
									<span>Created Date: {post.created_at}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default MainPage;
