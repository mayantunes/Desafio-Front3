import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginUsuario from './pages/login/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginUsuario />
  </React.StrictMode>
);