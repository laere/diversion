import axios from 'axios';


export const GET_INPUT = 'GET_INPUT';
export const GET_STREAMS = 'GET_STREAMS';

const baseURL = 'https://api.twitch.tv/kraken/';

export const getStreams = () => {
  return (dispatch, getState) => {
    const request = axios.get(`${baseURL}streams/`);

    request.then(function(response) {
      console.log(response);
      dispatch({
        type: GET_STREAMS,
        payload: request
      });
    }, function(err) {
      console.log('error loading data');
    });
  };
};

export const getInput = (input) => {
  return {
    type: GET_INPUT,
    payload: input
  };
};
