import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import VideosListItem from '../components/VideosListItem';

export default class Videos extends Component {
  render() {

    const { videos } = this.props;
    const videosData = videos.data.videos;
    let videosItems = videosData.map((video, index) => {
      return (
        <VideosListItem
          key={index}
          title={video.title.slice(0, 40).concat('...')}
          link={video.url}
          image={video.preview}
          name={video.channel.display_name}
          views={video.views}
        />
      );
    });

    return (
      <MainContent>
        <Heading style="videosHeader header" header="Videos"/>
          <ul className="videosList">
            {videosItems}
          </ul>
      </MainContent>
    );
  }
};
