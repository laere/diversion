import React, { Component } from 'react';
import MainContent from '../components/MainContent';
export default class GamesContainer extends Component {
  render() {
    return (
      <div className="gamesContainer">
        <MainContent>
          <h1>Games</h1>
        </MainContent>
      </div>
    );
  }
}
