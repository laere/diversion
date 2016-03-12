import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class StreamsContainer extends Component {
  render() {
    return (
      <div className="streamsContainer">
        <MainContent>
          <Heading
            className="streamsHeader header"
            header="Streams"
          />
        </MainContent>
      </div>
    );
  }
}
