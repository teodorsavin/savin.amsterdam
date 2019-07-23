import React, { Component } from 'react';
import music from './images/background-music.mp3';

class Home extends Component {
  render() {
    return (
        <div className="home">
          <audio autoPlay loop>
            <source src={music}></source>
          </audio>
          <h1>Teodor Savin</h1>
        </div>
    );
  }
}

export default Home;
