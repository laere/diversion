import React, { Component } from 'react';
import MainContent from '../components/MainContent';
export default class VideosContainer extends Component {
  render() {
    return (
      <div className="videosContainer">
        <MainContent>
          <h1>Videos</h1>
        </MainContent>
      </div>
    );
  }
}
