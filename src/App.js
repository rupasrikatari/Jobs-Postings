import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Jobs from './components/Jobs/Jobs';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Routes>
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Jobs />} />
    </Routes>
  );
};

export default App;