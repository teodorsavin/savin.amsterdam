import React, { Component } from 'react';
import Menu from './Menu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import About from './About';

import './css/index.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <div className="background">
              <Menu />
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
