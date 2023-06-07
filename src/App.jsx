import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import DragAndDrop from './components/drag-and-drop/drag-and-drop.component';

import './app.css';

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/tasks" element={<DragAndDrop />} />
    </Routes>
  );
};

export default App;
