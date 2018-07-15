import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from 'actions';

// this export is used for tests
export const Login = ({ dispatch, history, loggedIn }) => {
  const onLogin = () => {
    dispatch(startLogin('google', history));
  }
  return !loggedIn ? ([
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
  ]) : (
    <Redirect to='/todos' />
  )
};

const mapStateToProps = state => ({
  loggedIn: Object.keys(state.auth).length > 0,
});

// using the default to pass to connect
export default connect(mapStateToProps)(Login);
