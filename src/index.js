import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <AuthProvider>

          <CartProvider> {/* Wrap the application with the CartProvider */}

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CartProvider>
    </AuthProvider>

  </React.StrictMode>
);
