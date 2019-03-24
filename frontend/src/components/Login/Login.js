import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  state = { username: '', password: '' };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClick = e => {
    console.log(this.state.username, this.state.password);
  };

  render() {
    return (
      <div className="login_loginCard">
        <div className="login_heading">USER LOGIN</div>
        <div className="login_formField">
          <input
            type="text"
            placeholder="USERNAME"
            name="username"
            value={this.state.username}
            onChange={e => this.onChange(e)}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            name="password"
            value={this.state.password}
            onChange={e => this.onChange(e)}
          />
        </div>
        <button className="hvr-fade hvr-bob login_button" onClick={e => this.onClick(e)}>
          Login
        </button>
        <span className="login_error" hidden>
          errors
        </span>
      </div>
    );
  }
}
export default Login;
