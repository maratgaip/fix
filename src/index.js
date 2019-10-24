import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import HttpsRedirect from 'react-https-redirect';

import App from './App';
import Saga from './redux/saga';
import reducer from './redux/reducer';

ReactGA.initialize('UA-150846549-1'); //Unique Google Analytics tracking number

// create middlewares
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware
);

// create store
const store = createStore(reducer, middleware);

// run saga middleware
sagaMiddleware.run(Saga);

ReactDOM.render(
  <Provider store={store}>
    <HttpsRedirect>
      <App history={history} />
    </HttpsRedirect>
  </Provider>,
  document.getElementById('root')
);