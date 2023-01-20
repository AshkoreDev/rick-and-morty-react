import React from 'react';
import './Search.css';

const Search = ({setSearch}) => {
	
	return (

	  <form className="d-flex justify-content-center gap-4 mb-4">
			<input type="text" placeholder="Search for Characters" className="input" onChange={(e) => setSearch(e.target.value)}/>
			<button className="btn btn-large btn-primary fs-5">Search</button>
		</form>

	)
}

export default Search;