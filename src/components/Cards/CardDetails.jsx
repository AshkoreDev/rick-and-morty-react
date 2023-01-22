import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = ({page}) => {

	const { id } = useParams();
	const [fetchedData, setFetchedData] = useState([]);
	const { name, gender, image, location, origin, species, status, type } = fetchedData;

	const API = `https://rickandmortyapi.com/api/character/${id}`;

	useEffect(() =>  {
    
    (async function() {
      const res = await fetch(API);
      const data = await res.json();
      setFetchedData(data);
    })();

  }, [API]);

	return (

	  <section className="container d-flex justify-content-center mb-5">
	  	<article className="d-flex flex-column gap-2">
	  		<h2 className="text-center fs-1">{name}</h2>
	  		<img src={image} alt={`${name} photo`} className="img-fluid"/>
	  		{(() => {
						if (status === 'Alive') {
							return (<span className="bg-success text-white text-center fw-bold fs-5">{status}</span>);
						} else if(status === 'Dead') {
							return (<span className="bg-danger text-white text-center fw-bold fs-5">{status}</span>);
						} else {
							return (<span className="bg-warning text-white text-center fw-bold fs-5">{status}</span>);
						}
			    })()}
	  		<div className="content">
	  			<div className="fs-5">
	  				<span className="fw-bold">Gender: </span>
	  				<span className="">{gender}</span>
	  			</div>
	  			<div className="fs-5">
	  				<span className="fw-bold">Species: </span>
	  				<span className="">{species}</span>
	  			</div>
	  			<div className="fs-5">
	  				<span className="fw-bold">Type: </span>
	  				<span className="">{type === "" ? "Unknown" : type}</span>
	  			</div>
	  			<div className="fs-5">
	  				<span className="fw-bold">location: </span>
	  				<span className="">{location?.name}</span>
	  			</div>
	  			<div className="fs-5">
	  				<span className="fw-bold">origin: </span>
	  				<span className="">{origin?.name}</span>
	  			</div>
	  		</div>
	  	</article>
	  </section>
	);
};

export default CardDetails;