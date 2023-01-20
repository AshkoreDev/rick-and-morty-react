import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

const Cards = ({results}) => {
	let display;

	if (results) {

    display = results.map((character) => {
			return (
				<article key={character.id} className="card col-4 position-relative mb-4">
	      	<img src={character.image} alt={character.name} className="image img-fluid"/>

	      	<div className="content p-2">
	      		<h2 className="fs-4 fw-bold mb-2">{character.name}</h2>
	      		<h5 className="fs-6">Last location</h5>
	      		<h3 className="fs-5">{character.location.name}</h3>
	      	</div>
	      	{(() => {
						if (character.status === 'Alive') {
							return (<span className="badge bg-success position-absolute">{character.status}</span>);
						} else if(character.status === 'Dead') {
							return (<span className="badge bg-danger position-absolute">{character.status}</span>);
						} else {
							return (<span className="badge bg-warning position-absolute">{character.status}</span>);
						}
			    })()}
				</article>
  		);
	});
		
	} else {

		display = <h2>No Characters Found</h2>;
	}
	
	return <section>{display}</section>
}

export default Cards;

{/*

	{(() => {
					if (character.status === 'Alive') {
						return (<span className="badge bg-success position-absolute">{character.status}</span>);
					} else if(character.status === 'Dead') {
						return (<span className="badge bg-danger position-absolute">{character.status}</span>);
					} else {
						return (<span className="badge bg-warning position-absolute">{character.status}</span>);
					}
		    })()}
*/}