import React, { Component } from 'react';
import './Register.css';
import { connect } from 'react-redux';

class Register extends Component {
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
      <div className="register_registerCard">
        <div className="register_heading">USER REGISTER</div>
        <div className="register_formField">
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
        <button className="hvr-fade hvr-bob register_button" onClick={e => this.onClick(e)}>
          register
        </button>
        <span className="register_error" hidden>
          errors
        </span>
      </div>
    );
  }
}

export default connect()(Register);
