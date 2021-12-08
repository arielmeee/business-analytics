import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PageContextProvider } from './context/PageContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

