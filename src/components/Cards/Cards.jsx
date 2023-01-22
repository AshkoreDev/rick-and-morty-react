import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

const Cards = ({results, page}) => {

	let display;

	if (results) {

    display = results.map((character) => {

    	const { id, name, image, location, status } = character;

			return (
			    
				<Link key={id} className="card col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark" to={`${page}${id}`}>
	      	<div className="card__content d-flex flex-column justify-content-between">
	      		<img src={image} alt={name} className="image img-fluid"/>

		      	<div className="content p-2">
		      		<h2 className="fs-4 fw-bold mb-2">{name}</h2>
		      		<h5 className="fs-6">Last location</h5>
		      		<h3 className="fs-5">{location.name}</h3>
		      	</div>
		      	{(() => {
							if (status === 'Alive') {
								return (<span className="badge bg-success position-absolute">{status}</span>);
							} else if(status === 'Dead') {
								return (<span className="badge bg-danger position-absolute">{status}</span>);
							} else {
								return (<span className="badge bg-warning position-absolute">{status}</span>);
							}
				    })()}
	      	</div>
				</Link>
  		);
		});
		
	} else {

		display = <h2 className="text-center">No Characters Found</h2>;
	}
	
	return <section>{display}</section>
};

export default Cards;