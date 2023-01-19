import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter.jsx';
import Cards from './components/Cards.jsx';

function App() {

  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  
  const [pageNumber, setPageNumber] = useState(''):
  const [fetchedData, setFetchedData] = useState([]):
  const { info, results } = fetchedData;

  useEffect(() =>  {

    (async function() {
    
      try {

        const res = await fetch(API);
        const data = await res.json();
        setFetchedData(data);

      } catch(error) {

        console.log(error);
      }
    })

  }, [API]);

  return (
    <>
      <h1 className="text-center my-4">Rick & Morty App</h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </>
  )
}

export default App;
