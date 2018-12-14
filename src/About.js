import React, { Component } from 'react';
import aboutData from './data/about.json';

class About extends Component {
  render() {
    return (
        <div className="about">
            <h2>{aboutData.title}</h2>
            <p>
                {aboutData.content}
            </p>
        </div>
    );
  }
}

export default About;
