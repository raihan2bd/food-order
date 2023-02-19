import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderedPage from './pages/OrderedPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/ordered" element={<OrderedPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
