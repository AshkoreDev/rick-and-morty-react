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

	return (

		<div className="container">
			<div className="row mb-5">
				<h3 className="text-center mb-3">Episode: {''} 
					<span className="text-primary">{name === "" ? "Unknown" : name}</span>
				</h3>
				<h3 className="text-center">Aire Date {air_date === "" ? "Unknown" : `on ${air_date}`}</h3>
			</div>

			<div className="row justify-content-around">
				<div className="col-lg-3 col-12 mb-5">
					<h2 className="text-center fs-5 mb-4">Pick Episodes</h2>
					<InputGroup total={51} name="Episode" setId={setId}/>
				</div>
				<div className="col-lg-8 col-12">
					<div className="row">
						<Cards results={results} page="/episodes/"/>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Episodes;