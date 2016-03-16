
const GET_INPUT = 'GET_INPUT';

const INITIAL_STATE = {
  input: ''
}

export const getInput = (input) => {
  return {
    type: GET_INPUT,
    payload: input
  };
};

export default function userInput(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_INPUT: {
      return Object.assign({}, state, {
        input: action.payload
      });
    }
    default:
      return state;
  }
}
