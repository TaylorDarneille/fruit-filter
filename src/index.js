import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FruitContainer from './FruitContainer';

const fruits = ['apple', 'orange', 'banana', 'pear', 'pineapple', 'jicama', 'starfruit']

ReactDOM.render(
  <React.StrictMode>
    <FruitContainer fruits={fruits}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
