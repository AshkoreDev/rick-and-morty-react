import React from 'react';

const Pagination = ({pageNumber, setPageNumber}) => {

	let nextPage = () => {

		if (pageNumber === 10) {

			return;
		} 
			
		setPageNumber(page => page + 1);
	};

	let prevPage = () => {

		if (pageNumber === 1) {

			return;
		} 

		setPageNumber(page => page - 1);
	};

	return(

		<section className="container d-flex justify-content-center gap-5 my-4">
			<button className={`${pageNumber === 1 ? 'btn-secondary' : 'btn-primary'} btn`} onClick={prevPage}>Prev</button>
			<button className={`${pageNumber === 10 ? 'btn-secondary' : 'btn-primary'}  btn`} onClick={nextPage}>Next</button>
		</section>

	)
}

export default Pagination;