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
          game={video.game}
          name={video.name}
          link={video.url}
          image={video.preview}
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
