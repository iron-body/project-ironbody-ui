import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalVars from './GlobalVars.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-ironbody-ui">
      <GlobalVars />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
