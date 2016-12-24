var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  // call the below before each test is executed, it's counter part is afterEach();
  beforeEach( () => {

  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

describe('FilterTodos', () => {
  var todos = [{
    id: 1,
    text: 'First task to do...',
    completed: true
  },{
    id: 2,
    text: 'Second to last task to do...',
    completed: false
  },{
    id: 3,
    text: 'Last task to do...',
    completed: true
  }];

  it('should return all items if showCompleted is true', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);
  });

  it('should display only open items when showCompleted is unchecked', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, false, '');
    expect(filteredTodos.length).toBe(1);
  });

  it('should sort by completed status', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos[0].completed).toBe(false);
  });

  it('should filter todo\'s by search text', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, 'last');
    expect(filteredTodos.length).toBe(2);
  });

  it('should return all todo\'s when search text is empty', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);
  });

});
