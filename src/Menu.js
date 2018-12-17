import React, { Component } from 'react';
import linkedinLogo from './images/linkedin.svg';
import instagramLogo from './images/instagram-logo.svg';
import github from './images/github.svg';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
          <nav role="navigation">
              <div id="menuToggle">
                  <input type="checkbox" />
                  <span></span>
                  <span></span>
                  <span></span>
                  <ul id="menu">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="#">Info</a></li>
                      <li><a href="/contact">Contact</a></li>
                      <li>
                          <a href="https://github.com/teodorsavin" target="_blank" rel="noopener noreferrer"><img className="social github" src={github} alt="github" /></a>
                          <a href="https://www.linkedin.com/in/teodorsavin" target="_blank" rel="noopener noreferrer"><img className="social" src={linkedinLogo} alt="linkedin" /></a>
                          <a href="https://www.instagram.com/teodorsavin" target="_blank" rel="noopener noreferrer"><img className="social" src={instagramLogo} alt="instagram" /></a>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
    );
  }
}

export default Menu;
