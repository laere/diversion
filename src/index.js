import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//  STORE
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
// ROUTING
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// CONTAINERS
import App from './app/app';
import Home from './containers/HomeContainer';
import Games from './containers/GamesContainer';
import Streams from './containers/StreamsContainer';
import Videos from './containers/VideosContainer';
import Users from './containers/UsersContainer';
// Store with middleware.
const createStoreWithMiddleware = applyMiddleware(Thunk, Promise)(createStore);
// Store with middleware and reducers
const State = combineReducers({
  routing: routerReducer
});
const store = createStoreWithMiddleware(State);
// Sync history with store
const history = syncHistoryWithStore(browserHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="streams" component={Streams} />
        <Route path="games" component={Games} />
        <Route path="videos" component={Videos} />
        <Route path="users" component={Users} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
