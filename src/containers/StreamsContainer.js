import React, { PropTypes } from 'react';
import Streams from '../components/Streams';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { streamsFetchActions } from '../reducers/StreamsReducer';

class StreamsContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    streams: PropTypes.object.isRequired,
    input: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { dispatch, streams } = this.props;
    if (!streams.fetching && !streams.data) {
      dispatch(streamsFetchActions.fetch());
    }
  }

  render() {
    const { streams } = this.props;
    return streams.fetching ?
      <Loading name='Loading...'/> :
      <Streams streams={streams}/>;
  }
}

function mapStateToProps(state) {
  return {
    streams: state.streams,
    input: state.input
  }
}

export default connect(mapStateToProps)(StreamsContainer);
