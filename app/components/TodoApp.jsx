import React, {Component} from 'react';
import { connect } from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import { startLogout } from 'actions';

export const TodoApp = ({ dispatch, history }) =>{
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(startLogout(history));
  }

    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={onLogout}>
            <svg className="logout-svg" viewBox="0 0 24 24">
              <path d="M17,17.25V14H10V10H17V6.75L22.25,12L17,17.25M13,2A2,2 0 0,1 15,4V8H13V4H4V20H13V16H15V20A2,2 0 0,1 13,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2H13Z" />
            </svg>
            &nbsp;Logout
          </a>
        </div>

        <div className='row justify-content-center'>
          <div className='col-sm-10 col-md-8 col-lg-6'>
            <h1 className='page-title'>Todo App</h1>
            <div className='container'>
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
};
// ES6 syntax to use import instead of require
export default connect()(TodoApp);

// below is the older syntax
// modules.exports = TodoApp;
