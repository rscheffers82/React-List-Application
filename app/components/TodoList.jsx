import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';
import TodoAPI from 'TodoAPI';
import Todo from 'Todo';

export class TodoList extends Component {
  render() {
    const {todos, showCompleted, searchText} = this.props;

    const renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      return filteredTodos.length === 0
        ? <p key='no-items' className='container__message'>Yay! All tasks are done, it's time to relax...</p>
        : filteredTodos.map( (todo) => <Todo key={todo.id} {...todo}/> );
    };

    return (
      <FlipMove
        enterAnimation="accordionVertical"
        leaveAnimation="accordionVertical"
        appearAnimation="accordionVertical"
        maintainContainerHeight="true"
      >
        {renderTodos()}
      </FlipMove>
    );
  }
};

export default connect( (state) => state )(TodoList);