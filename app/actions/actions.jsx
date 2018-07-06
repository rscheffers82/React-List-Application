import moment from 'moment';
import firebase, {firebaseRef, loginProvider} from 'app/firebase/'

export const setSearchText = (searchText) => ({
    type: 'SET_SEARCH_TEXT',
    searchText
});

export const toggleShowCompleted = () => ({
    type: 'TOGGLE_SHOW_COMPLETED'
});

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
});

export const startAddTodo = (text) => {
    return (dispatch, getState) => {
            const todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        const uid = getState().auth.uid;
        const todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

        // return todoRef for test purposes only
        return todoRef.then( () => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};

export const addTodos = (todos) => ({
    type: 'ADD_TODOS',
    todos
});

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const logout = () => ({
    type: 'LOGOUT'
});

// call data from firebase (object)
// transform it into an array
// push this to the store
// move the key to the value you can use Object.keys();
export const startAddTodos = () => {
    // function to be called with thunk and thus provide access to dispatch and getState
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        var todosRef = firebaseRef.child(`users/${uid}/todos`);
        return todosRef.once('value')
        .then( (snapshot) => {
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

export const updateTodo = (id, updates) => ({
    type: 'UPDATE_TODO',
    id,
    updates
});

export const startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child( `users/${uid}/todos/${id}` );
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

export const startLogin = (platform, history) => {
  return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(loginProvider[platform])
            .then( (result) => {
                dispatch(setUser(result.user));
                console.log('Auth worked!', result);
                history.push('/todos');
                dispatch(startAddTodos());
            }, 
            (error) => {
                console.log('Unable to auth', error);
            });
    };
};

export const setUser = ({ displayName, photoURL, uid }) => ({
    type: 'LOGIN',
    user: { displayName, photoURL, uid }
});

export const startLogout = (history) => {
    return (dispatch, getState) => {
        return firebase.auth().signOut()
        .then( () => {
            history.push('/');
            console.log('Logged out!');
        });
    };
};
