import React, { useState, useEffect } from 'react';
import Cards from './../components/Cards/Cards.jsx';
import InputGroup from './../components/Filter/Category/InputGroup.jsx';

const Episodes = () => {

	const [id, setId] = useState(1);
	const [info, setInfo] = useState([]);
	const [results, setResults] = useState([]);
	const { air_date, name } = info;

	const API = `https://rickandmortyapi.com/api/episode/${id}`;

	useEffect(() =>  {
    
    (async function() {
      const res = await fetch(API);
      const data = await res.json();
      
      setInfo(data);

      const charactersInfo = await Promise.all(
				data.characters.map((links) => {
					return fetch(links).then((resC) => resC.json());
				})                                               
      );

      setResults(charactersInfo);
    })();

  }, [API]);

	return(

		<div className="container">
			<div className="row mb-4">
				<h2 className="text-center mb-4">Episode: {name === "" ? "Unknown" : name}</h2>
				<h3 className="text-center">Aire Date {air_date === "" ? "Unknown" : `on ${air_date}`}</h3>
			</div>

			<div className="row">
				<div className="col-3">
					<h2 className="text-center fw-bold fs-4 mb-4">Pick Episodes</h2>
					<InputGroup total={51} name="Episode" setId={setId}/>
				</div>
				<div className="col-8">
					<div className="row py-2">
						<Cards results={results} page="/episodes/"/>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Episodes;