import React, { PropTypes } from 'react';
import { streamsFetchActions } from './StreamsReducer';

class StreamsContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    streams: PropTypes.object.isRequired,
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
      <div>Loading...</div> :
      <div>{/* access streams via streams.data */}</div>;
  }
}

function mapStateToProps(state) {
  return {
    streams: state.streams,
  }
}

export default connect(mapStateToProps)(StreamsContainer);
