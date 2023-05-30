import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Organizations from './pages/organizations/organizations.component';
import OrganizationView from './pages/organization-view/organization-view.component';

import './app.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Organizations />} />
      <Route path="/:id" element={<OrganizationView />} />
    </Routes>
  );
};

export default App;
