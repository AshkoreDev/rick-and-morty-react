import React from 'react';

const Navbar = () => {

	return (

		<nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
		  <div className="container">
		    <h1 className="navbar-brand text-primary fw-bold fs-4">Rick & Morty App</h1>
		    <button 
		    	className="navbar-toggler" 
		    	type="button" 
		    	data-bs-toggle="collapse" 
		    	data-bs-target="#navbarNavAltMarkup" 
		    	aria-controls="navbarNavAltMarkup" 
		    	aria-expanded="false" 
		    	aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
		      <div className="navbar-nav">
		        <a className="nav-link" aria-current="page" href="#">Home</a>
		        <a className="nav-link" href="#">Features</a>
		        <a className="nav-link" href="#">Pricing</a>
		        <a className="nav-link disabled">Disabled</a>
		      </div>
		    </div>
		  </div>
		</nav>

	)
};

export default Navbar;