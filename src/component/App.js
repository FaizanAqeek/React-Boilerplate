import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './config/history';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <Router history={history}>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </Router>
  );
}

export default App;
