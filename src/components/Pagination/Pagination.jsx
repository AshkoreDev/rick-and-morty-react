import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {

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
	  />
	)
};

export default Pagination;