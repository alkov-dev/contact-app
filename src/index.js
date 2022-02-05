import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';

import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
        <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

