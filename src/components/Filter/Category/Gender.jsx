import React from 'react';
import FilterBtn from './../FilterBtn';

const Gender = ({ setPageNumber, setGender }) => {

	const genders = ['Female', 'Male', 'Genderless', 'Unknown'];

	return (

		<div className="accordion-item">
	    <h2 className="accordion-header" id="headingThree">
	      <button 
	      	className="accordion-button collapsed" 
	      	type="button" 
	      	data-bs-toggle="collapse" 
	      	data-bs-target="#collapseThree"
	      	aria-expanded="false" 
	      	aria-controls="collapseThree">Gender
	      </button>
	    </h2>
	    <div 
	    	id="collapseThree" 
	    	className="accordion-collapse collapse" 
	    	aria-labelledby="headingThree" 
	    	data-bs-parent="#accordionExample">
	      <div className="accordion-body d-flex flex-wrap gap-3">
	      	{	genders.map((item, index) => (
	      			<FilterBtn 
	      				key={index} 
	      				name="gender" 
	      				index={index} 
	      				item={item}
	      				task={setGender}
	      				setPageNumber={setPageNumber}
	      			/>
	      	)) }	
	      </div>
	    </div>
  	</div>
  	
	);
};

export default Gender;