var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component for each todo item', () => {
  	var todos = [{
  		id: 1,
  		text: 'Do something'
  	},{
  		id: 2,
  		text: 'Check mail'
  	}];

  	var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
  	var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
  	// above outputs an array of components
  	
  	expect(todosComponents.length).toBe(todos.length);
  });
});

// add a testcase that will check if there are no items.
// Video 103, 2 minutes in the talk
