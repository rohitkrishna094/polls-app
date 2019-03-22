import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar_container">
          <li>Home</li>
          <li>Profile</li>
          <li>Login</li>
          <li>Register</li>
          <li>Logout</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
