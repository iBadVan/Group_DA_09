import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App1.jsx';
//import App from './App2.jsx'; // COMENTAR EL OTRO IMPORT "import App from './App1.jsx';" Y DESCOMENTAR //import App from './App2.jsx' PARA PODER VER EL 2DO EJERCICIO 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
