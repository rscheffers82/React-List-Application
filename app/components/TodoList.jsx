import React, { Component } from 'react';
import Todo from 'Todo';
import { connect } from 'react-redux';
import TodoAPI from 'TodoAPI';

export class TodoList extends Component {
  render() {
    const {todos, showCompleted, searchText} = this.props;

    const renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      return filteredTodos.length === 0
        ? <p className='container__message'>Yay! All tasks are done, it's time to relax...</p>
        : filteredTodos.map( (todo) => <Todo key={todo.id} {...todo}/> );
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
};

export default connect( (state) => state )(TodoList);