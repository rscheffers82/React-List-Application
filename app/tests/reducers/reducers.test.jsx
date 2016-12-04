var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'hello'
      };
      var res = reducers.searchTextReducer( df(''), df(action) );

      expect(res).toEqual(action.searchText);
    });
  });


  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      var res = reducers.showCompletedReducer( df(false), df(action) );

      expect(res).toEqual(true)
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Todo sample text'
      };
      var res = reducers.todosReducer( df([]), df(action) );

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: 1,
        text: 'Test todo',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }];

      var action = {
        type: 'ADD_TODOS',
        todos: todos
      };
      var res = reducers.todosReducer( df([]), df(action) );

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });


    it('should toggle todo', () => {
      var todos = [{
        id: 1,
        text: 'first todo item',
        completed: true,
        createdAt: '12 July',
        completedAt: undefined
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      var res = reducers.todosReducer( df(todos), df(action) );
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
    // Create todo array
    // generate action
    // call reducer and assert completed flipped
    // completedAt undefined in those cases


  });

});
