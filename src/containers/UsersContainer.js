import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Header from '../components/Header';

export default class UsersContainer extends Component {
  render() {
    return (
      <div className="usersContainer">
        <MainContent>
          <Header
            className="usersHeader header"
            header="Users"
          />
        </MainContent>
      </div>
    );
  }
}
