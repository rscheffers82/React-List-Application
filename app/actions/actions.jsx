import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from 'app/firebase/'

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    // return todoRef for test purposes only
    return todoRef.then( () => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};

// call data from firebase (object)
// transform it into an array
// push this to the store
// move the key to the value you can use Object.keys();
export var startAddTodos = () => {
  // function to be called with thunk and thus provide access to dispatch and getState
  return (dispatch, getState) => {
    var todosRef = firebaseRef.child('todos');

    return todosRef.once('value').then( (snapshot) => {
      var todos = snapshot.val() || {};
      var todosArray = [];
      // Transform Object into an array
      Object.keys( todos ).forEach( ( todoID ) => {
        todosArray.push({
          id: todoID,
          ...todos[todoID]
        });
      });

      dispatch( addTodos(todosArray) );
    // }, (e) => {
    //   console.log('Unable to fetch data from FireBase', e);
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child( `todos/${id}` );
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    // return todoRef for test purposes only
    return todoRef.update(updates).then( () => {
      dispatch( updateTodo(id, updates) );
    });
  };
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then( (result) => {
      console.log('Auth worked!', result);
    }, (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then( () => {
      console.log('Logged out!');
    });
  };
};
