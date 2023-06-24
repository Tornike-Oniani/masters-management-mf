import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import DragAndDrop from './components/drag-and-drop/drag-and-drop.component';

import './app.css';

const App = ({ onNavigate }) => {
  // Sync the memory route to container browser route
  const location = useLocation();

  useEffect(() => {
    if (onNavigate) {
      onNavigate(location.pathname);
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/tasks" element={<DragAndDrop />} />
    </Routes>
  );
};

export default App;
