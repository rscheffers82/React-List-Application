var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo with valid data', () => {
    var todoText = 'Feed the cat';

    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument( <AddTodo onAddTodo={spy}/> );
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit( $el.find('form')[0] );

    expect(spy).toHaveBeenCalledWith( todoText );

  });

  it('should not call onAddTodo when invalid input', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument( <AddTodo onAddTodo={spy}/> );
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit( $el.find('form')[0] );

    expect(spy).toNotHaveBeenCalled();

  });



});
