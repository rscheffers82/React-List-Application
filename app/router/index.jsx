import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase';

export default (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' render={ () => (
                    firebase.auth().currentUser
                        ? <Redirect to='/todos' />
                        : <Redirect to='/login' />
                )} />
                <Route path="/login" component={Login} />
                <Route path='/todos' component={TodoApp} />
                <Redirect to="/login" />
            </Switch>
        </div>
    </Router>
);