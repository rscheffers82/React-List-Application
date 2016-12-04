var React = require('react');
// var Todo = require('Todo');
import Todo from 'Todo';
var {connect} = require('react-redux');

export var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {

      if ( todos.length === 0 ) {
        return (
          <p className='container__message'>Yay! All tasks are done, it's time to relax...</p>
        );
      }

      return todos.map( (todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
