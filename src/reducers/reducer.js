import dotProp from 'dot-prop-immutable';

import {
  GET_INPUT,
  GET_STREAMS
} from '../actions/actions';


const INITIAL_STATE = {
  streams: [],
  games: [],
  videos: [],
  users: [],
  input: ''
};


export default function appState(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_STREAMS:
      state = dotProp.set(state, 'streams', action.payload);
      console.log(state);
      return state;
    case GET_GAMES:
      console.log(state);
      return state;
    case GET_VIDEOS:
      console.log(state);
      return state;
    case GET_USERS:
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
