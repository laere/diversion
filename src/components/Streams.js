import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class Streams extends Component {

  render() {
    const { streams } = this.props;
    let streamItems = streams.data.streams.map((stream, index) => {
      return (
        <div>
          <li key={index}>{stream.game}</li>
          <img src={stream.preview.large} alt="images" />
        </div>
      );
    });

    return (
      <div className="streams">
        <MainContent>
          <Heading className="streamsHeader header" header="Streams"/>
          {streamItems}
        </MainContent>
      </div>
    );
  }
};

Streams.propTypes = {
  streams: React.PropTypes.obj
};
