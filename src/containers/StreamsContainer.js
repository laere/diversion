import React, { Component } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';

import { connect } from 'react-redux';
import { getStreams } from '../actions/actions';

class StreamsContainer extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { getStreams } = this.props;
    getStreams();
  }

  render() {

    const { streams, loaded } = this.props;

    return (
      <div>
        {loaded
        ? <Streams streams={streams}/>
        : <Loading name="Loading...." />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    streams: state.streams,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps, { getStreams } )(StreamsContainer);
