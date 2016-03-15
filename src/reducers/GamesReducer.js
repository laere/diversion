import FetchActionCreators from '../utils/FetchActionCreators';
import FetchReducerPrototype from '../utils/FetchReducerPrototype';

const REQUEST_STREAMS = 'REQUEST_STREAMS';
const RECEIVE_STREAMS_SUCCESS = 'RECEIVE_STREAMS_SUCCESS';
const RECEIVE_STREAMS_FAILURE = 'RECEIVE_STREAMS_FAILURE';

export const gamesFetchActions = new FetchActionCreators(
  'https://api.twitch.tv/kraken/games/top',
  [
    REQUEST_STREAMS,
    RECEIVE_STREAMS_SUCCESS,
    RECEIVE_STREAMS_FAILURE
  ]
);

export default new FetchReducerPrototype(gamesFetchActions);
