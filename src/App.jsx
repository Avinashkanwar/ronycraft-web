import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ToastProvider from './components/ToastProvider';
import AppRoutes from '../routes';

function App() {
  return (
    <Router>
      <CartProvider>
        <AppRoutes />
        <ToastProvider />
      </CartProvider>
    </Router>
  );
}

export default App;

