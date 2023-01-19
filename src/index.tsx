import React from 'react';
import ReactDOM from 'react-dom/client';
import Dropdown from './components/Dropdown';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dropdown/>
  </React.StrictMode>
);


