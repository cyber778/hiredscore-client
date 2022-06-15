import React, { useState, useEffect } from 'react';
import api from './axios'

import './App.css';

function App() {

  const [candidates, setCandidates] = useState([])
  useEffect(() => {
      api.get('/hiring').then(({data}) => {
        setCandidates(data.data.candidates)
      })
  }, []);

  const CandidateList = candidates.map((candidate, i) => {
    const jobs = candidate.history.map((title) => 
      <li>{ title }</li>
    )
    return (
      <ul>
        <li key={i}>{ candidate.name }</li>
        <ul>
          { jobs }
        </ul>
      </ul>
    )
  });


  if (!candidates) return null;

  return (
    <div className="App">
     { CandidateList }
    </div>
  );
}

export default App;