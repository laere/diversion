import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import ChannelsListItem from '../components/ChannelsListItem';

export default class Channels extends Component {

  render() {
    const { channels } = this.props;
    const channelObj = channels.data;
    const channelArray = Object.keys(channelObj);
    let channelsItems = channelArray.map((value, index) => {
      <ChannelsListItem
        game={dataObj[value]}
      />
    });

    return (
      <MainContent>
        <Heading style="channelsHeader header" header="Channels"/>
          <ul className="channelsList">
            {channelsItems}
          </ul>
      </MainContent>
    );
  }
}
