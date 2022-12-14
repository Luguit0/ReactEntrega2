// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTES
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ESTILOS
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
