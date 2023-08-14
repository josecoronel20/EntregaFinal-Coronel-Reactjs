import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navComponents/Navbar';
import Catalog from './components/catalogComponents/Catalog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Catalog />
  </React.StrictMode>
);
