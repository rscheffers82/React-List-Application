import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

// this export is used for tests
export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;

    dispatch( actions.startLogin('google') );
  },
  render() {
    return (
      <div>
        <h1 className="page-title"></h1>
        <div className="row">
          <div className="columns small-centered small-10 midium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with your google account.</p>
              <button className="button" ref="github" onClick={this.onLogin}>Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
// using the default to pass to connect
export default Redux.connect()(Login);
