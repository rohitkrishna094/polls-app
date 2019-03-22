import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar_container">
          <li className="hvr-underline-reveal hvr-forward">Home</li>
          <li className="hvr-underline-reveal hvr-forward">Profile</li>
          <li className="hvr-underline-reveal hvr-forward">Login</li>
          <li className="hvr-underline-reveal hvr-forward">Register</li>
          <li className="hvr-underline-reveal hvr-forward">Logout</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
