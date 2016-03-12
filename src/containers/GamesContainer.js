import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class GamesContainer extends Component {
  render() {
    return (
      <div className="gamesContainer">
        <MainContent>
          <Heading
            className="gamesHeader header"
            header="Games"
          />
        </MainContent>
      </div>
    );
  }
}
