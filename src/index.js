import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter basename='/trybetunes'>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
