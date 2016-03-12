import dotProp from 'dot-prop-immutable';

import {
  SELECTED_ICON
} from '../actions/actions';


const INITIAL_STATE = {
  selectedIcon: false
};


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SELECTED_ICON:
      console.log(state);
      return state;
    default:
      return state;
  }
}
