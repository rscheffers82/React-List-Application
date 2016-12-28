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
        todo: {
          id: '123456',
          text: 'Todo sample text',
          completed: false,
          createdAt: 4567712
        }
      };
      var res = reducers.todosReducer( df([]), df(action) );

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
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


    it('should update todo', () => {
      var todos = [{
        id: 1,
        text: 'first todo item',
        completed: true,
        createdAt: '12 July',
        completedAt: undefined
      }];

      var updates = {
        completed: false,
        completedAt: null
      };

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer( df(todos), df(action) );

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);

    });
  });
  describe('authReducer', () => {
    it('should login user', () => {
      var auth = {};
      var action = {
        type: 'LOGIN',
        uid: '12345'
      }
      var res = reducers.authReducer( df(auth), df(action) );

      expect(res.uid).toEqual( action.uid );
    });

    it('should logout user', () => {
      var auth = { uid: '12345' };
      var action = { type: 'LOGOUT' }

      var res = reducers.authReducer( df(auth), df(action) );

      expect(res.uid).toEqual(undefined);
    });
  });

});
