import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="search-bar">
				<input type="text" placeholder="Search" />
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
