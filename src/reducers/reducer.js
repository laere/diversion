import dotProp from 'dot-prop-immutable';
import { GET_INPUT, GET_STREAMS } from '../actions/actions';


const INITIAL_STATE = {

  streams: [],
  input: ''

};


export default function appState(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_STREAMS:
      console.log(state);
      state = dotProp.set(state, 'streams', action.payload);
      return state;
    case GET_INPUT:
      console.log(state);
      state = dotProp.set(state, 'input', action.payload);
      return state;
    default:
      return state;
  }
}
