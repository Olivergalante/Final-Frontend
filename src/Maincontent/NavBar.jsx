import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = () => {
		onSearch(searchTerm);
	};

	return (
		<div className="navbar">
			<div className="search-bar">
				<input
					type="text"
					placeholder="Search"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button onClick={handleSearch}>Search</button>
			</div>
			<div className="nav-buttons">
				<Link to="/mainpage">
					<button>
						<span role="img" aria-label="Home">
							🏠
						</span>
					</button>
				</Link>
				<Link to="/profilepage">
					<button>
						<span role="img" aria-label="Profile">
							👤
						</span>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
