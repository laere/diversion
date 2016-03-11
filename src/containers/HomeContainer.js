import React, { Component } from 'react';
import MainContent from '../components/MainContent';

export default class HomeContainer extends Component {
  render() {
    return (
      <div className="homeContainer">
        <MainContent>
          <h1>Home</h1>
        </MainContent>
      </div>
    );
  }
}
