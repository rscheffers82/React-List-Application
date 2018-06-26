import React, { Component } from 'react';
import  {connect} from 'react-redux';
import moment from 'moment';
import { startToggleTodo } from 'actions';

const Todo = ({ id, text, completed, createdAt, completedAt, dispatch }) => {
    const todoClassName = completed ? 'todo todo-completed' : 'todo';

    const renderDate = () => {
      let message = 'Created at: ';
      let timestamp = createdAt;
      const format = 'Do MMMM YYYY @ k:mm';

      if (completed) {
        message = 'Completed at: ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format(format);

    };

    return (
      <div className={todoClassName} onClick={ () => dispatch( startToggleTodo(id, !completed) )}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p  className='todo__subtext'>{renderDate()}</p>
        </div>
      </div>
    );
};

export default connect()(Todo);
