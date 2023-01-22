import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {

	const [width, setWidth] = useState(window.innerWidth);

	const updateDimension = () => setWidth(window.innerWidth);

	useEffect(() => {

		window.addEventListener('resize', updateDimension);
		return () => window.removeEventListener('resize', updateDimension);

	}, [width]);

	console.log(width);

	return(

	  <ReactPaginate 
	  	previousLabel="<<"
	  	nextLabel=">>"
	  	className="pagination justify-content-center gap-4 my-4"
	  	previousClassName="btn btn-primary fs-5"
	  	nextClassName="btn btn-primary fs-5"
	  	pageClassName="page-item"
	  	pageLinkClassName="page-link"
	  	activeClassName="active"
	  	pageCount={info?.pages} 
	  	onPageChange={(data) => setPageNumber(data.selected + 1)}
	  	forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
	  	marginPagesDisplayed={width < 767 ? 0 : 2}
	  	pageRangeDisplayed={width < 767 ? 0 : 1}
	  />
	  
	)
};

export default Pagination;