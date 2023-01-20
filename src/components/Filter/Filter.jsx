import React from 'react';
import Status from './Category/Status.jsx';
import Species from './Category/Species.jsx';
import Gender from './Category/Gender.jsx';

const Filter = () => {

	return (

		<section className="col-3">
			<h2 className="text-center fw-bold fs-4 mb-2">Filter</h2>
			<h3 style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline fs-5 mb-4">Clear Filters</h3>

			<div className="accordion" id="accordionExample">
				<Status />
				<Species />
				<Gender />
			</div>
		</section>
		
	)
};

export default Filter;