import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

const Cards = (results) => {
	console.log(results)
	let display;

	if (results) {

		return (
		  display = results.map(character => {
		
				<artcile key={character.id} className="card col-4 position-relative mb-4">
	      	<img src="" alt={character.name} className="cards img-fluid"/>

	      	<div className="content p-4">
	      		<h2 className="fs-4 fw-bold mb-4 mt-2">{character.name}</h2>
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
			    })}
				</artcile>
			})
		)
	} else {

		return (display = <h2>No Characters Found</h2>)
	}
	
	return <section>{display}</section>
}

export default Cards;