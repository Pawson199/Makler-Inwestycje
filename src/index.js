import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import {Apidata} from './api_context'

ReactDOM.render(
  <Router>
    <Apidata>
      <App />
    </Apidata>
  </Router>,
  document.getElementById('root')
)

