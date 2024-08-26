import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

export { Header };  // Ensure this is properly exported for external consumption

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
