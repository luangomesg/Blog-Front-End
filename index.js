import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './src/pages/Home/index';
import GlobalStyles from './src/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles/>
    <Home />
  </>

);

