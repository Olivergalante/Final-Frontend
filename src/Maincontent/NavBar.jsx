import React from "react";

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="search-bar">
				{/* Add your search bar component or input field here */}
				<input type="text" placeholder="Search" />
			</div>
			<div className="nav-buttons">
				{/* Home button */}
				<button>
					<span role="img" aria-label="Home">
						🏠
					</span>
				</button>
				{/* Profile button */}
				<button>
					<span role="img" aria-label="Profile">
						👤
					</span>
				</button>
				{/* Post button */}
				<button>
					<span role="img" aria-label="Post">
						➕
					</span>
				</button>
			</div>
		</div>
	);
};

export default NavBar;
