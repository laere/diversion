import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import ListItem from '../components/ListItem';

export default class Games extends Component {

  render() {
    const { games } = this.props;
    const gamesData = games.data.top;
    let gamesItems = gamesData.map((game, index) => {
      return (
        <ListItem
          key={index}
        />
      );
    });

    return (
      <MainContent>
        <Heading style="gamesHeader header" header="Games"/>
      </MainContent>
    );
  }
}

Games.propTypes = {
  games: React.PropTypes.obj.isRequired
};
