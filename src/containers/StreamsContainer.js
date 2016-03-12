import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Header from '../components/Header';

export default class StreamsContainer extends Component {
  render() {
    return (
      <div className="streamsContainer">
        <MainContent>
          <Header
            className="streamsHeader header"
            header="Streams"
          />
        </MainContent>
      </div>
    );
  }
}
