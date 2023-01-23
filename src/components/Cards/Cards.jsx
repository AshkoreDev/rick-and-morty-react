import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

const Cards = ({ results, page }) => {

	let display;

	if (results) {

    display = results.map((character) => {

    	const { id, name, image, location, status } = character;

			return (
			    
				<Link key={id} className="card col-lg-4 col-md-6 col-12 mb-4 text-dark" to={`${page}${id}`}>
	      	<div className="card__content d-flex flex-column justify-content-between position-relative">
	      		<img src={image} alt={name} className="image img-fluid" width="296" height="296" loading="lazy"/>

		      	<div className="card__info p-2">
		      		<h5 className="fw-bold mb-2">{name}</h5>
		      		<h6>Last location:</h6>
		      		<h6>{location.name}</h6>
		      	</div>
		      	{(() => {
						if (status === 'Alive') {
							return (<span className="badge bg-success position-absolute">{status}</span>);
						} else if(status === 'Dead') {
							return (<span className="badge bg-danger position-absolute">{status}</span>);
						} else {
							return (<span className="badge bg-secondary position-absolute">{status}</span>);
						}
			    })()}
	      	</div>
				</Link>
  		);
		});
		
	} else {

		display = <h2 className="text-center">No Characters Found</h2>;
	}
	
	return <>{display}</>;
};

export default Cards;