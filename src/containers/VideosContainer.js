import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class VideosContainer extends Component {
  render() {
    return (
      <div className="videosContainer">
        <MainContent>
          <Heading
            className="videosHeader header"
            header="Videos"
          />
        </MainContent>
      </div>
    );
  }
}
