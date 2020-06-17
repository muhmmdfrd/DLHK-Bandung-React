// react library
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// root module
import App from './App';

// service worker
import * as serviceWorker from './serviceWorker';

// css library
import 'fontawesome-free/css/all.min.css';
import './assets/css/sb-admin-2.css';

// js library
import 'chart.js';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// register or unregister serviceworker
serviceWorker.unregister();
