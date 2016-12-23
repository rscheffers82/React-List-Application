import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

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

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 5
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

});
