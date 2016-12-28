import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import Index from './pages/Index';

import rootReducer from './ducks';

let store = createStore(rootReducer);

const Render = () => { render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Index} />
            //   <Route path="hello" component={App}/>
          </Route>
      </Router>
  </Provider>,
  document.getElementById('main')
)};

let unsubscribe = Render();

if (module.hot) {
  module.hot.accept();
}
