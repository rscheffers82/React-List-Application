var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

// var TodoList = require('TodoList');
// ConnectedTodoList is the exported var passed down through the connect function
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one todo component for each todo item', () => {
  	var todos = [{
  		id: 1,
  		text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 499
  	},{
  		id: 2,
  		text: 'Check mail',
      completed: false,
      completedAt: undefined,
      createdAt: 499
  	}];

    var store = configure({
      todos
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
  	var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
  	// above outputs an array of components

  	expect(todosComponents.length).toBe(todos.length);
  });
});

// add a testcase that will check if there are no items.
// Video 103, 2 minutes in the talk
