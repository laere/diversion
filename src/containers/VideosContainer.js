import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Header from '../components/Header';

export default class VideosContainer extends Component {
  render() {
    return (
      <div className="videosContainer">
        <MainContent>
          <Header
            className="videosHeader header"
            header="Videos"
          />
        </MainContent>
      </div>
    );
  }
}
