import axios from 'axios';


export const GET_INPUT = 'GET_INPUT';


export const getInput = (input) => {
  return {
    type: GET_INPUT,
    payload: input
  };
};
