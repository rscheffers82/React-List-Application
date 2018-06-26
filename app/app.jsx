import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import routes from 'app/router';
import 'applicationStyles';

const store = require('configureStore').configure();

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);