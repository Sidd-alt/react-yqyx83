import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './Store/store.js';
import { Provider } from 'react-redux';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
