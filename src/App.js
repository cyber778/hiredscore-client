import React, { useState, useEffect } from 'react';
import api from './axios'

import './App.css';

// import CandidateList from './components/CandidateList';

function App() {

  const [candidates, setCandidates] = useState([])

  useEffect(() => {
      api.get('/hiring').then(({data}) => {
        setCandidates(data.data.candidates.map((candidate, i) => {
          const jobs = candidate.history.map((title, j) => 
            <li>{title}</li>
          )
          return <ul>
            <li>{candidate.name}</li>
            <ul>
              {jobs}
            </ul>
          </ul>
        }));
      })
  }, []);

  if (!candidates) return null;

  return (
    <div className="App">
     {/* <CandidateList candidates={candidates}/> */}
     {candidates}
    </div>
  );
}

export default App;
