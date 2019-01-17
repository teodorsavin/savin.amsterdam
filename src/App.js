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
              <div className="marquee">
            	<p>
                    “The difference between ordinary and extraordinary is that little extra.“ - Jimmy Johnson;
                    “Experience is simply the name we give our mistakes.” - Oscar Wilde &middot;
                    “Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.” - Dale Carnegie
                    "Why fit in when you were born to stand out?" - Dr. Seuss
                </p>
              </div>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
