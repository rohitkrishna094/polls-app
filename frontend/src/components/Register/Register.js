import React, { Component } from 'react';
import './Register.css';
import { signup } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Register extends Component {
  state = { username: '', password: '' };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClick = e => {
    const credentials = { username: this.state.username, password: this.state.password };
    this.props.signup(credentials);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedUp) {
      this.props.history.push('/login');
    }
    console.log(nextProps.error);
  }

  render() {
    console.log(this.props.error);
    console.log(Object.keys(this.props.error));
    console.log(Object.keys(this.props.error).length);
    console.log(this.props.error && Object.keys(this.props.error).length !== 0);
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
        <span
          className="register_error"
          style={{ display: `${this.props.error && Object.keys(this.props.error).length !== 0 ? 'inherit' : 'none'}` }}
        >
          {JSON.stringify(this.props.error)}
        </span>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    signedUp: state.auth.signedUp,
    error: state.auth.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signup: signUpCredentials => dispatch(signup(signUpCredentials))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
