import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import Users from '../components/Users';

import { connect } from 'react-redux';
import { getUsers } from '../actions/actions';

class UsersContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="usersContainer">
        <MainContent>
          <Heading
            style="usersHeader header"
            header="Users"
          />
          <Users />
        </MainContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UsersContainer);
