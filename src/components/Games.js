import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class Games extends Component {
  render() {
    return (
      <div className="games">
        <MainContent>
          <Heading
            style="gamesHeader header"
            header="Games"/>
        </MainContent>
      </div>
    );
  }
}
