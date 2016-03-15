import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import GamesListItem from '../components/GamesListItem';

export default class Games extends Component {

  render() {
    const { games } = this.props;
    const gamesData = games.data.top;
    let gamesItems = gamesData.map((game, index) => {
      return (
        <GamesListItem
          key={index}
          name={game.game.name}
          viewers={game.viewers}
          image={game.game.box.medium}
        />
      );
    });

    return (
      <MainContent>
        <Heading style="gamesHeader header" header="Games"/>
        <ul>
          {gamesItems}
        </ul>
      </MainContent>
    );
  }
}
