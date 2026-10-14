import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import GameProvider from './contexts/GameProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GameProvider>
        <App />
      </GameProvider>
    </BrowserRouter>
  </React.StrictMode>
);
