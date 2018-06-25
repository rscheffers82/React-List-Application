import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startLogin } from 'actions';

// this export is used for tests
export class Login extends Component {
  onLogin = () => {
    this.props.dispatch(startLogin('google', this.props.history));
  }

  render() {
    return (
      <div>
        <h1 className="page-title"></h1>
        <div className="row">
          <div className="columns small-centered small-10 midium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with your google account.</p>
              <button className="button" ref="google" onClick={this.onLogin.bind(this)}>Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
// using the default to pass to connect
export default connect()(Login);
