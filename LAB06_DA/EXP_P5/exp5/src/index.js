import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambié de 'react-dom' a 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crear el contenedor root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Usar root.render() para renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Reporte de métricas de rendimiento
reportWebVitals();
