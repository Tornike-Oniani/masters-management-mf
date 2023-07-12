import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import HistoryMemoryRouter from './helpers/history-memory-router';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import createServer from './server/server';

const mount = (el, { onNavigate, isRunInIsolation = false }) => {
  const memoryHistory = createMemoryHistory();

  const root = createRoot(el);

  // We want to use different routers depending on if the app is integrated into container or run in isolation
  // In case of isolation we use BrowserRouter so that the current url is visible on address bar
  // Otherwise we use MemoryRouter so that it won't conflict with container's router
  if (isRunInIsolation) {
    createServer();
    root.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  } else {
    root.render(
      <HistoryMemoryRouter history={memoryHistory}>
        <Provider store={store}>
          <App onNavigate={onNavigate} />
        </Provider>
      </HistoryMemoryRouter>
    );
  }

  return {
    // This is used by container to sync the route with this micro frontend
    onParentNavigate: (trailingRoute) => {
      const { pathname } = memoryHistory.location;

      if (pathname !== trailingRoute) {
        memoryHistory.push(trailingRoute);
      }
    },
  };
};

// Handle development environment in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_management-dev-root');

  if (devRoot) {
    mount(devRoot, { isRunInIsolation: true });
  }
}

export { mount };
