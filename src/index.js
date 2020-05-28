import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);

serviceWorker.unregister();