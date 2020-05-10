import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import { Reset } from 'assets/styled/reset';
import { Custom } from 'assets/styled/custom';

import App from './App';

const isLocal =
  window.location.href.includes('localhost') || window.location.href.includes('127.0.0.1');

ReactGA.initialize('UA-116650364-9', { testMode: isLocal });

ReactDOM.render(
  <React.Fragment>
    <Reset />
    <Custom />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
