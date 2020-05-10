import React from 'react';
import ReactDOM from 'react-dom';

import { Reset } from 'assets/styled/reset';
import { Custom } from 'assets/styled/custom';

import App from './App';

ReactDOM.render(
  <React.Fragment>
    <Reset />
    <Custom />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
