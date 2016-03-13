import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import Games from '../components/Games';

import { connect } from 'react-redux';
import { getGames } from '../actions/actions';

class GamesContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getGames } = this.props;
    getGames();
  }

  render() {
    return (
      <div className="gamesContainer">
        <MainContent>
          <Heading
            className="gamesHeader header"
            header="Games"
          />
          <Games />
        </MainContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps, { getGames } )(GamesContainer);
