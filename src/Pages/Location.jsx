import React, { useState, useEffect } from 'react';
import Cards from './../components/Cards/Cards.jsx';
import InputGroup from './../components/Filter/Category/InputGroup.jsx';

const Location = () => {

	const [id, setId] = useState(1);
	const [info, setInfo] = useState([]);
	const [results, setResults] = useState([]);
	const { name, type, dimension } = info;

	const API = `https://rickandmortyapi.com/api/location/${id}`;

	useEffect(() =>  {
    
    (async function() {
      const res = await fetch(API);
      const data = await res.json();

      setInfo(data);

      const residentsInfo = await Promise.all(
				data.residents.map((links) => {
					return fetch(links).then((resR) => resR.json());
				})                                               
      );

      setResults(residentsInfo);
    })();

  }, [API]);

	return (

		<div className="container">
			<div className="row mb-5">
				<h3 className="text-center mb-2">Location: {''}
					<span className="text-primary">{name === "" ? "Unknown" : name}</span>
				</h3>
				<h4 className="text-center">Dimension: {dimension === "" ? "Unknown" : dimension}</h4>
				<h4 className="text-center">Type: {type === "" ? "Unknown" : type}</h4>
			</div>

			<div className="row">
				<div className="col-lg-3 col-12 mb-5">
					<h2 className="text-center fs-5 mb-4">Pick Location</h2>
					<InputGroup total={126} name="Location" setId={setId}/>
				</div>
				<div className="col-lg-8 col-12">
					<div className="row">
						<Cards results={results} page="/location/"/>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Location;