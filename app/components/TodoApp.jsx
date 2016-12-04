var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

// var TodoList = require('TodoList');
// var AddTodo = require('AddTodo');

// the below are updated when we introduced react-redux
// using import we use the default import (connect instead of the raw element)
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
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
  }
});

module.exports = TodoApp;
