var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Help Zoki'
        }, {
          id: 3,
          text: 'Clean room'
        }, {
          id: 4,
          text: 'Cook dinner'
        }
      ]
    };
  },
  handleAddTodo: function () {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        TodoApp.jsx...
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
