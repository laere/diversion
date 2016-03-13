import axios from 'axios';

export const GET_INPUT = 'GET_INPUT';
export const GET_STREAMS = 'GET_STREAMS';
export const GET_GAMES = 'GET_GAMES';
export const GET_VIDEOS = 'GET_VIDEOS';
export const GET_USERS = 'GET_USERS';

const BASE_URL = 'https://api.twitch.tv/kraken/';

const STREAMS_URL = BASE_URL + 'streams';

export const getStreams = () => {
  return (dispatch, getState) => {
    const request = axios.get(STREAMS_URL);

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
