import React from 'react';

const FilterBtn = ({name, index, item}) => {

	return (

	  <div>
	  	<div className="form-check">
			  <input 
			  	className="form-check-input" 
			  	type="radio" 
			  	name={name} 
			  	id={`${name}-${index}`}
			  />
			  <label 
			  	className="btn btn-outline-primary" 
			  	htmlFor={`${name}-${index}`}>
			  {item}</label>
			</div>
	  </div>
	  
	)
};

export default FilterBtn;