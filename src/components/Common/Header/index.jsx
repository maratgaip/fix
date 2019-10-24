import React, { Component } from 'react';

import logo from './assets/logo3.png';
import './style.css';

class Landing extends Component {
  render() {
    return (
      <div className="header-component">
        <div className="container">
          <a href="/"><img src={logo} alt="logo" className="logo" /></a>
        </div>

      </div>
    );
  }
}

export default Landing;
