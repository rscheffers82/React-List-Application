export var searchTextReducer = (state = '', action) => {
  // with the user of deep freeze, state and action should not change as they should be pure functions.
  // the below will therefor let the test fail
  // action.something = 'I should not be added';

  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};
