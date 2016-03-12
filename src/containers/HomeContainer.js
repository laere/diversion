import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Header from '../components/Header';

export default class HomeContainer extends Component {
  render() {
    return (
      <div className="homeContainer">
        <MainContent>
          <Header
            className="homeHeader header"
            header="Home"
          />
        </MainContent>
      </div>
    );
  }
}
