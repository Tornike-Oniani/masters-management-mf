import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

import './app.css';

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
    </Routes>
  );
};

export default App;
