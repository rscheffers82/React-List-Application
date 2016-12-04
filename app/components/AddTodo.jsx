var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

// the below is a referenced export, meaning you have to reference it on the item that comes back
// e.g. somevar.AddTodo()
// only used for testing
export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
      var {dispatch} = this.props;
      var todoText = this.refs.todoText.value;

      if ( todoText.length > 0 ) {
        this.refs.todoText.value = '';
        dispatch( actions.addTodo(todoText) );
        // because we use connect, we have access to the dispatch function in props. We just need to pull
        // it off as done in line 11, after e.preventDefault().
      } else {
        this.refs.todoText.focus();
      }
  },
  render: function () {
    return (
      <div className='container__footer'>
        <form ref="form" onSubmit={this.onSubmit} className="add-todo">
          <input type="text" ref="todoText" placeholder="What do you need to do..."/>
          <button className="button expanded">Add...</button>
        </form>
      </div>
    );
  }
});

// AddTodo doesn't need any vars from the store, therefore connect() can remain empty.
export default connect()(AddTodo);

// module.exports = AddTodo;
