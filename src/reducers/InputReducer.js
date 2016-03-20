import InputActionCreator from '../utils/InputActionCreator';

const GET_CHANNEL_INPUT = 'GET_CHANNEL_INPUT';
const GET_USERS_INPUT = 'GET_USERS_INPUT';

const INITIAL_STATE = {
  input: ''
}

// export const getInput = (input) => {
//   return (dispatch) => {
//     dispatch({
//       type: GET_INPUT,
//       payload: input
//     })
//   }
// }

export const getChannelInput = new InputActionCreator([GET_CHANNEL_INPUT]);
export const getUsersInput = new InputActionCreator([GET_USERS_INPUT]);

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_CHANNEL_INPUT:
      return Object.assign({}, state, {
        input: action.payload
      });
      console.log(state);
    default:
      return state;
  }
}
