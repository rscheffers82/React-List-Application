var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  // call the below before each test is executed, it's counter part is afterEach();
  beforeEach( () => {
    localStorage.removeItem('todos');    
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = 'hello';
      TodoAPI.setTodos( badTodos );

      expect( localStorage.getItem('todos') ).toBe(null);      
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      localStorage.setItem( 'todos', 'hello I\'m bad data' );
      expect( TodoAPI.getTodos() ).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem( 'todos', JSON.stringify(todos) );

      var actualTodos = TodoAPI.getTodos();
      expect( actualTodos ).toEqual(todos);
    });

  });
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
