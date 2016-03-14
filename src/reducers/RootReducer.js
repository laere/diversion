import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import StreamsReducer from './StreamsReducer';
import VideosReducer from './VideosReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  streams: StreamsReducer,
  videos: VideosReducer
});
