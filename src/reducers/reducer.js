import dotProp from 'dot-prop-immutable';
import { GET_INPUT } from '../actions/actions';


const INITIAL_STATE = {
  input: ''
};


export default function appState(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_INPUT:
    console.log(state);
    state = dotProp.set(state, 'input', action.payload);
    return state;
    default:
      return state;
  }
}
