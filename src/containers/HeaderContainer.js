import React, { Component } from 'react';
import { Link } from 'react-router';
import Searchbar from '../components/Searchbar';


export default class HeaderContainer extends Component {
  render() {
    return (
    <header>
      <div className="mainHeader">
        <div>
          <Link to="/">
            <h1 className="logo">Diversion</h1>
          </Link>
        </div>
        <Searchbar />
      </div>
    </header>
    );
  }
}
