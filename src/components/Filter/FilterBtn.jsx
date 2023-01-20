import React from 'react';
import './Filter.css';

const FilterBtn = ({name, index, item, task, setPageNumber}) => {

	return (

	  <div>
	  	<div className="form-check">
			  <input 
			  	className="form-check-input" 
			  	type="radio" 
			  	name={name} 
			  	id={`${name}-${index}`}
			  	onClick={() => {
			  		task(item);
			  		setPageNumber(1);
			  	}}
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