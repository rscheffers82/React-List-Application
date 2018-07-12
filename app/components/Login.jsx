import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from 'actions';

// this export is used for tests
const Login = ({ dispatch, history }) => {
  const onLogin = () => {
    dispatch(startLogin('google', history));
  }

  return ([
    <h1 key="h1" className="page-title">To-do List</h1>,
    <div key="login" className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm12">
        <div className="container callout callout-auth">
          <h3>Login</h3>
          <p>Login with your google account.</p>
          <button className="blue-border btn btn-primary" onClick={onLogin}>Login with Google</button>
        </div>
      </div>
    </div>
  ]);
};
// using the default to pass to connect
export default connect()(Login);
