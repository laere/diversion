import React, { Component } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';

import { connect } from 'react-redux';
import { fetchStreams } from '../reducers/StreamsReducer.js';

class StreamsContainer extends Component {

  componentDidMount() {
    const { dispatch, streams } = this.props;

    if (!streams.fetching && !streams.streams)
      dispatch(fetchStreams());
  }

  render() {
    const { streams } = this.props;

    return (
      <div>
        {streams.fetching
          ? <Loading name="Loading...." />
          : <Streams streams={streams}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams
  };
};

export default connect(mapStateToProps)(StreamsContainer);
