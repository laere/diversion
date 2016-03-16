import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class Channels extends Component {

  render() 
    return (
      <MainContent>
        <Heading style="channelsHeader header" header="Channels"/>
          <ul className="channelsList">

          </ul>
      </MainContent>
    );
  }
}
