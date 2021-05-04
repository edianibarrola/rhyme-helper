import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">rhymED</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
				<Link to="/sign_in">
					<button className="btn btn-primary">Sign In</button>
				</Link>
				<Link to="/word">
					<button className="btn btn-primary">Word</button>
				</Link>
			</div>
		</nav>
	);
};
