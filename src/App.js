import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css'; // leave in case I decide to add custom css later

const App = () => {
  useEffect(() => {
    // Initialize Materizize js
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
    </Fragment>
  );
};

export default App;
