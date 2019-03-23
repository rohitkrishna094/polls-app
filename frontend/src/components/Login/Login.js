import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login_loginCard">
        <div className="login_heading">USER LOGIN</div>
        <div className="login_formField">
          <input type="text" placeholder="USERNAME" />
          <input type="password" placeholder="PASSWORD" />
        </div>
        <button className="hvr-fade hvr-bob">Login</button>
        <span className="login_error">Errors</span>
      </div>
    );
  }
}
export default Login;
