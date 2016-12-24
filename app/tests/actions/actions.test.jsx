import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () =>{
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Roy Scheffers'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123456aef',
        text: 'Some text here to test',
        completed: true,
        completedAt: 12457826
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'Take Zorana out for dinner...';

    store.dispatch( actions.startAddTodo( todoText )).then( () => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });


  it('should generate add todos action object', () => {
    var todos = {
      id: 1,
      text: 'Test todo',
      completed: false,
      createdAt: 123,
      completedAt: undefined
    };

    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '5',
      updates: {completed: false}
    };
    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach( (done) => {
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then( () => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'Test for our todo item',
          completed: false,
          createdAt: 1233456
        })
      })
      .then( () => done() )
      .catch(done);
    });

    afterEach( (done) => {
      testTodoRef.remove().then( () => done() );
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then( () => {
        const mockActions = store.getActions();

        // check type and ID type
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        // check the updates object for correct values
        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        // because a timestamp is dynamically added with can only assert it exists
        expect( mockActions[0].updates.completedAt).toExist();

        done();
      }, done ); // when called like this instead of done() mocka assumes the test failed
    });

    it('should populate todos and dispatch ADD_TODOS', (done) => {
      // create the store and action
      // dispatch the ADD_TODOS action
      // verify on the store which actions were dispatched
      // - add todos action, array with one item
      // - check the text from above.
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch( action ).then( () => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Test for our todo item');
        done();
      }, done)
    });
  });
});
