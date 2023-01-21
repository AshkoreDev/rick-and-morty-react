import React from 'react';
import Status from './Category/Status.jsx';
import Species from './Category/Species.jsx';
import Gender from './Category/Gender.jsx';

const Filter = ({setStatus, setGender, setSpecies, setPageNumber}) => {

	const clear = () => {
		setStatus('');
		setGender('');
		setSpecies('');
		setPageNumber('');
		window.location.reload(false);
	}

	return (

		<section className="col-3">
			<h2 className="text-center fw-bold fs-4 mb-2">Filter</h2>
			<h3 style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline fs-5 mb-4" onClick={clear}>Clear Filters</h3>

			<div className="accordion" id="accordionExample">
				<Status setPageNumber={setPageNumber} setStatus={setStatus}/>
				<Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
				<Gender setPageNumber={setPageNumber} setGender={setGender}/>
			</div>
		</section>
		
	)
};

export default Filter;