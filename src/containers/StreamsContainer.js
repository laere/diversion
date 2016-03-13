import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import Streams from '../components/Streams';

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

    const { loaded } = this.props;

    return (
      <div className="streamsContainer">
        <MainContent>
          <Heading
            className="streamsHeader header"
            header="Streams"
            />
          {loaded ? <Streams /> : false } {/*Replace false with a loading component*/}
        </MainContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps, { getStreams } )(StreamsContainer);
