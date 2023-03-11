import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={configureStore}>
    <App />
  </Provider>
);
