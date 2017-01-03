import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import Index from './pages/Index';

import rootReducer from './ducks';

import middlewares from './middleware';

let store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

const Render = () => {
  render (
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Index} />
              <Route path="trending" component={App}/>
              <Route path="popular" component={App}/>
              <Route path="latest" component={App}/>
              <Route path="timemachine" component={App}/>
              <Route path="about" component={App}/>
          </Route>
      </Router>
  </Provider>,
  document.getElementById('main')
);};

let unsubscribe = Render();
