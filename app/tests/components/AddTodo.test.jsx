var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {AddTodo} = require('AddTodo');

// below we load the connected component which is as default exported using connect
// var AddTodo = require('AddTodo');
// within AddTodo sits our raw component exported using export var AddTodo = ...
// var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid data', () => {
    var todoText = 'Feed the cat';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument( <AddTodo dispatch={spy}/> );
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit( $el.find('form')[0] );

    expect(spy).toHaveBeenCalledWith( action );

  });

  it('should not dispatch ADD_TODO when invalid input', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument( <AddTodo dispatch={spy}/> );
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit( $el.find('form')[0] );

    expect(spy).toNotHaveBeenCalled();

  });

});
