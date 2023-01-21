import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

	return (

		<nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
		  <div className="container">
		    <Link className="navbar-brand text-primary fw-bold fs-3" to="/">Rick & Morty App</Link>
		    <button 
		    	className="navbar-toggler" 
		    	type="button" 
		    	data-bs-toggle="collapse" 
		    	data-bs-target="#navbarNavAltMarkup" 
		    	aria-controls="navbarNavAltMarkup" 
		    	aria-expanded="false" 
		    	aria-label="Toggle navigation">

		    	<i className="fa-solid fa-bars open fw-bold text-dark"></i>
		    	<i className="fa-solid fa-xmark close fw-bold text-dark"></i>
		      
		    </button>
		    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
		      <div className="navbar-nav gap-4 fs-5">
		        <NavLink className="nav-link" activeclassname="active" to="/">Characters</NavLink>
		        <NavLink className="nav-link" to="/episodes">Episodes</NavLink>
		        <NavLink className="nav-link" to="/location">Location</NavLink>
		      </div>
		    </div>
		  </div>
		</nav>

	);
};

export default Navbar;