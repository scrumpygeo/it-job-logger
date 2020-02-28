import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css'; // leave in case I decide to add custom css later

const App = () => {
  useEffect(() => {
    // Initialize Materizize js
    M.AutoInit();
  });
  return <div className='App'>My App</div>;
};

export default App;
