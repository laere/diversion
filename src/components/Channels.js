import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import ChannelsListItem from '../components/ChannelsListItem';

export default class Channels extends Component {

  render() {

    const { channels } = this.props;
    const channelObj = channels.data;

    return (
      <MainContent>
        <Heading style="channelsHeader header" header="Channels"/>
          <ul className="streamsList">
            {channelObj.name}
            {channelObj.status}
          </ul>
      </MainContent>
    );
  }
}
