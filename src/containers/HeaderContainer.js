import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';

export default class HeaderContainer extends Component {
  render() {
    return (
    <header>
      <div className="mainHeader">
        <div>
          <h1 className="logo">Diversion</h1>
        </div>
        <Searchbar />
      </div>
    </header>
    );
  }
}
