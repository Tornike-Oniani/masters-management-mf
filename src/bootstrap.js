import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

import './server/server';

const mount = (el) => {
  const root = createRoot(el);
  root.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_management-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
