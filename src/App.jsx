import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/Cards.jsx';
import Search from './components/Search/Search.jsx';
import Filter from './components/Filter/Filter.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import CardDetails from './components/Cards/CardDetails.jsx';
import Pagination from './components/Pagination/Pagination.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes.jsx';
import Location from './Pages/Location.jsx';

function App() {

  return (

    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<CardDetails />}/>

        <Route path="/episodes" element={<Episodes />}/>
        <Route path="/episodes/:id" element={<CardDetails />}/>

        <Route path="/location" element={<Location />}/>
        <Route path="/location/:id" element={<CardDetails />}/>
      </Routes>
    </Router>

  );
};

const Home = () => {

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const { info, results } = fetchedData;

  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() =>  {
    
    (async function() {
      const res = await fetch(API);
      const data = await res.json();
      setFetchedData(data);
    })();

  }, [API]);

  return (
    <>
      <h2 className="text-center mb-4">Characters</h2>
      <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div className="container">
        <div className="row">
          <Filter 
            setStatus={setStatus} 
            setGender={setGender} 
            setSpecies={setSpecies} 
            setPageNumber={setPageNumber} 
          />
          <div className="col-8">
            <div className="row py-2">
              <Cards results={results} page="/"/>
            </div>
          </div>
        </div>
      </div>

      <Pagination 
        info={info} 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default App;