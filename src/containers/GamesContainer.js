import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Header from '../components/Header';

export default class GamesContainer extends Component {
  render() {
    return (
      <div className="gamesContainer">
        <MainContent>
          <Header
            className="gamesHeader header"
            header="Games"
          />
        </MainContent>
      </div>
    );
  }
}
