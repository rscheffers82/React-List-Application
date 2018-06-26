import React, { Component } from 'react';
import {connect} from 'react-redux';
import { startAddTodo } from 'actions';

// the below is a referenced export, meaning you have to reference it on the item that comes back
// e.g. somevar.AddTodo()
// only used for testing
export class AddTodo extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    debugger;
      const { dispatch } = this.props;
      const todoText = this.refs.todoText.value;

      if ( todoText.length > 0 ) {
        this.refs.todoText.value = '';
        dispatch( startAddTodo(todoText) );
      } else {
        this.refs.todoText.focus();
      }
  }
  render() {
    return (
      <div className='container__footer'>
        <form ref="form" onSubmit={this.onSubmit.bind(this)} className="add-todo">
          <div class="input-group mb-3">
            <input type="text" className="form-control" ref="todoText" placeholder="What do you need to do..."/>
            <div class="input-group-append">
              <button className="button expanded input-group-text">Add...</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

// AddTodo doesn't need any vars from the store, therefore connect() can remain empty.
export default connect()(AddTodo);