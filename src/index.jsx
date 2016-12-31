import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import App from './containers/appContainer';
import reducers from './reducers/index';
import '../style/style.scss';

const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(
    loggerMiddleware,
  ),
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
