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
    return (
      <div className="streamsContainer">
        <MainContent>
          <Heading
            className="streamsHeader header"
            header="Streams"
          />
          <Streams />
        </MainContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams
  };
};

export default connect(mapStateToProps, { getStreams } )(StreamsContainer);
