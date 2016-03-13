import React, { Component } from 'react';
import DashboardLink from '../components/DashboardLink';

import { connect } from 'react-redux';
import { getStreams } from '../actions/actions';

class Dashboard extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="dashboard">

        <DashboardLink
          className="dashboardLink streamsLink"
          link="streams"
          icon="fa fa-desktop fa-2x"
          bgColor={'10px solid #09BC8A'}
          fontColor={'#fff'}
        />

        <DashboardLink
          className="dashboardLink gamesLink"
          link="games"
          icon="fa fa-gamepad fa-2x"
          bgColor={'#E84C4C'}
          fontColor={'#fff'}
        />

        <DashboardLink
          className="dashboardLink videosLink"
          link="videos"
          icon="fa fa-video-camera fa-2x"
          bgColor={'2px solid #6870B8'}
          fontColor={'#fff'}
        />

        <DashboardLink
          className="dashboardLink usersLink"
          link="users"
          icon="fa fa-users fa-2x"
          bgColor={'10px solid #774C60'}
          fontColor={'#fff'}
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: state.streams
  };
};

export default connect(mapStateToProps, { getStreams } )(Dashboard);
