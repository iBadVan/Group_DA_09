import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './App.css';
import App from './App';

const raiz = ReactDOM.createRoot(document.getElementById('root'));
raiz.render(
  <HashRouter>
    <App />
  </HashRouter>
);
