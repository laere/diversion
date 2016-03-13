import dotProp from 'dot-prop-immutable';

import {
  GET_INPUT,
  GET_STREAMS,
  GET_GAMES,
  GET_VIDEOS,
  GET_USERS
} from '../actions/actions';


const INITIAL_STATE = {
  streams: [],
  games: [],
  videos: [],
  users: [],
  loaded: false,
  input: ''
};


export default function appState(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_STREAMS:
      state = dotProp.set(state, 'streams', action.payload);
      state = dotProp.set(state, 'loaded', true);
      console.log(state);
      return state;
    case GET_GAMES:
      state = dotProp.set(state, 'games', action.payload);
      console.log(state);
      return state;
    case GET_VIDEOS:
      state = dotProp.set(state, 'videos', action.payload);
      console.log(state);
      return state;
    case GET_USERS:
      state = dotProp.set(state, 'users', action.payload);
      console.log(state);
      return state;
    case GET_INPUT:
      state = dotProp.set(state, 'input', action.payload);
      console.log(state);
      return state;
    default:
      return state;
  }
}
