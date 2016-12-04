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
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map( (todo) => {
      if (todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos( todos, showCompleted, searchText );

    return (
      <div>

        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <h1 className='page-title'>Todo App</h1>
            <div className='container'>
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
