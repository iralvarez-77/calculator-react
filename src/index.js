import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './components/Calculator';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Calculator />
    </Provider>
  </React.StrictMode>
);

