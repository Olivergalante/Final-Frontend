import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function MainPage() {
	const [posts, setPosts] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch("http://127.0.0.1:8000/posts")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
				setIsLoading(false);
			});
	}, []);

	const handleSearch = (searchTerm) => {
		const filtered = posts.filter((post) =>
			post.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredPosts(filtered);
	};

	const renderPosts = filteredPosts.length > 0 ? filteredPosts : posts;

	const formatDate = (dateString) => {
		const options = { year: "numeric", month: "short", day: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};

	return (
		<div className="blog-post-rendered">
			<NavBar onSearch={handleSearch} />
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div className="blog-post">
					{renderPosts.map((post) => (
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
