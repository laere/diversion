import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

export default class UsersContainer extends Component {
  render() {
    return (
      <div className="usersContainer">
        <MainContent>
          <Heading
            className="usersHeader header"
            header="Users"
          />
        </MainContent>
      </div>
    );
  }
}
