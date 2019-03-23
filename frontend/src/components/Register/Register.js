import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  render() {
    return (
      <div className="register_registerCard">
        <div className="register_heading">USER REGISTER</div>
        <div className="register_formField">
          <input type="text" placeholder="USERNAME" />
          <input type="password" placeholder="PASSWORD" />
        </div>
        <button className="hvr-fade hvr-bob register_button">register</button>
        <span className="register_error" hidden>
          errors
        </span>
      </div>
    );
  }
}
export default Register;
