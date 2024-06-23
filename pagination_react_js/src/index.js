import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Implement a Button Based Pagination with Truncation functionality in React JS

// Requirements remain similar to previous lesson, just we are going to truncate our buttons into "..." (ellipsis) when it exceeds a provided limit.


