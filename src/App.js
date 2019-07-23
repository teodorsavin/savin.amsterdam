import React, { Component } from 'react';
import Menu from './Menu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Portfolio from "./Portfolio";

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
                <Route path="/portfolio" component={Portfolio} />
                <div className="marquee">
            	  <p>
                    “The difference between ordinary and extraordinary is that little extra.“ - Jimmy Johnson;
                    “Experience is simply the name we give our mistakes.” - Oscar Wilde &middot;
                    “Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.” - Dale Carnegie;
                    "Why fit in when you were born to stand out?" - Dr. Seuss;
	            "Always make a total effort, even when the odds are against you." - Arnold Palmer;
                    "There is no small act of kindness. Every compassionate act makes large the world" - Mary Anne Radmacher;
                    "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.";
                    "Enjoy the little things, for one day you may look back and realize they were the big things." - Robert Brault
                    "Everything is possible. The impossible just takes longer." - Dan Brown;
                    "In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists." - Eric Hoffer
                    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time." - Thomas A. Edison
                    "Progress is impossible without change, and those who cannot change their minds cannot change anything." - George Bernard Shaw
                  </p>
              </div>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
