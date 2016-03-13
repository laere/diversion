import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class HomeContainer extends Component {
  render() {
    return (
      <div className="homeContainer">
        <MainContent>
          <Heading
            className="homeHeader header"
            header="Home"
          />
        
        </MainContent>
      </div>
    );
  }
}
