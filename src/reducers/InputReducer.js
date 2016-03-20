import dotProp from 'dot-prop-immutable';

const GET_INPUT = 'GET_INPUT';

const INITIAL_STATE = {
  input: ''
}

export const getInput = (input) => {
  return (dispatch) => {
    dispatch({
      type: GET_INPUT,
      payload: input
    })
  }
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_INPUT:
      return Object.assign({}, state, {
        input: action.payload
      });
      console.log(state);
    default:
      return state;
  }
}
