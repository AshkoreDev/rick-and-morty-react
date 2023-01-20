import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter/Filter.jsx';
import Cards from './components/Cards/Cards.jsx';

function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() =>  {
    (async function() {
      const res = await fetch(API);
      const data = await res.json();
      setFetchedData(data);
    })();

  }, [API]);

  return (
    <>
      <h1 className="text-center my-4">Rick & Morty App</h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
