// Estilos globales
import './assets/styles.css';

// React core
import React from 'react';
import ReactDOM from 'react-dom/client';

// Componente raíz 
import App from './App';

// Renderiza la aplicación en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
