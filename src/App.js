import React, { useState } from 'react';

import './App.css';
import { Header, Nav, Results } from './Components';
import requests from './utils/requests';

function App() {
  // Default movie category when the page is loaded.
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
