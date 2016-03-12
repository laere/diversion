import dotProp from 'dot-prop-immutable';

import {
  DASHBOARD_ICON_SELECTED
} from '../actions/actions';


const INITIAL_STATE = {
  dashboardIconSelected: false
};


export default function appState(state = INITIAL_STATE, action) {
  switch(action.type) {
    case DASHBOARD_ICON_SELECTED:
      console.log(state);
      state = dotProp.set(state, 'dashboardIconSelected', true);
      return state;
    default:
      return state;
  }
}
