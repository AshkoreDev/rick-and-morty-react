import React from 'react';
import Status from './Category/Status.jsx';
import Species from './Category/Species.jsx';
import Gender from './Category/Gender.jsx';

const Filter = ({ setStatus, setGender, setSpecies, setPageNumber }) => {

	const clear = () => {

		setStatus('');
		setGender('');
		setSpecies('');
		setPageNumber(1);
		window.location.reload(false);
	};

	return (

		<section className="col-lg-3 col-12 mb-5">
			<h2 className="text-center fs-5 mb-2">Filter</h2>
			<h3 className="link__filter text-center text-primary text-decoration-underline fs-6 mb-4" onClick={clear}>Clear Filters</h3>

			<div className="accordion" id="accordionExample">
				<Status setPageNumber={setPageNumber} setStatus={setStatus}/>
				<Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
				<Gender setPageNumber={setPageNumber} setGender={setGender}/>
			</div>
		</section>
		
	);
};

export default Filter;