import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import ListItem from '../components/ListItem';

export default class Streams extends Component {

  render() {
    const { streams } = this.props;
    const streamsData = streams.data.streams;
    let streamItems = streamsData.map((stream, index) => {
      return (
        <ListItem
          key={index}
          game={stream.channel.game}
          image={stream.preview.large}
          url={stream.channel.url}
          name={stream.channel.name}
          viewers={stream.viewers}
          followers={stream.followers}
          views={strea.views}
        />
      );
    });

    return (
      <MainContent>
        <Heading style="streamsHeader header" header="Streams"/>
        <div className="content">
          {streamItems}
        </div>
      </MainContent>
    );
  }
};

Streams.propTypes = {
  streams: React.PropTypes.object
};
