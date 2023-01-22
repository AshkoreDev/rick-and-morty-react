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

	return(

		<div className="container">
			<div className="row mb-4">
				<h2 className="text-center mb-4">Location: {name === "" ? "Unknown" : name}</h2>
				<h4 className="text-center">Dimension: {dimension === "" ? "Unknown" : dimension}</h4>
				<h5 className="text-center">Type: {type === "" ? "Unknown" : type}</h5>
			</div>

			<div className="row">
				<div className="col-3">
					<h2 className="text-center fw-bold fs-4 mb-4">Pick Location</h2>
					<InputGroup total={126} name="Location" setId={setId}/>
				</div>
				<div className="col-8">
					<div className="row py-2">
						<Cards results={results} page="/location/"/>
					</div>
				</div>
			</div>
		</div>

	)
};

export default Location;