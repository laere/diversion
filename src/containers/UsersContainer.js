import React, { PropTypes } from 'react';
import Users from '../components/Users';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { usersFetchActions } from '../reducers/UsersReducer';

class UsersContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { dispatch, users } = this.props;
    if (!users.fetching && !users.data) {
      dispatch(usersFetchActions.fetch('https://api.twitch.tv/kraken/users?limit=100'));
    }
  }

  render() {
    const { users, input } = this.props;
    return users.fetching ?
      <Loading name='Loading...'/> :
      <Users users={users} input={input}/>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UsersContainer);
