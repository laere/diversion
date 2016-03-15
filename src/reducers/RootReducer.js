import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import StreamsReducer from './StreamsReducer';
import VideosReducer from './VideosReducer';
import GamesReducer from './GamesReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  streams: StreamsReducer,
  games: GamesReducer,
  videos: VideosReducer
});

export default rootReducer;
