import React from 'react';
import { createRoot } from 'react-dom/client'; // Importando createRoot de react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Certifique-se de importar corretamente

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);