import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import StreamsReducer from './StreamsReducer';

const rootReducer = combineReducers({
  streams: StreamsReducer,
  routing: routerReducer
});

export default rootReducer;
