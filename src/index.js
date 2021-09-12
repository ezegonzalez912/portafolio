import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Route } from "react-router-dom";


ReactDOM.render(
  <React.Fragment>
    <Router>
      <Route exact path="/:name" component={App} />
      <Route exact path="/" component={App} />
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);
