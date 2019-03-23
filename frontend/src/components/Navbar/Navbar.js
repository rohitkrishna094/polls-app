import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar_container">
          <li className="hvr-underline-reveal hvr-forward">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hvr-underline-reveal hvr-forward">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="hvr-underline-reveal hvr-forward">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="hvr-underline-reveal hvr-forward">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="hvr-underline-reveal hvr-forward">Logout</li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navbar);
