import React, { Component } from 'react';
import DashboardLink from '../components/DashboardLink';


export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">

        <DashboardLink
          style="dashboardLink streamsLink"
          type="streams"
          icon="fa fa-desktop fa-2x"
          bgColor={'#09BC8A'}
          fontColor={'#fff'}
        />

        <DashboardLink
          style="dashboardLink gamesLink"
          type="games"
          icon="fa fa-gamepad fa-2x"
          bgColor={'#E84C4C'}
          fontColor={'#fff'}
        />

        <DashboardLink
          style="dashboardLink videosLink"
          type="videos"
          icon="fa fa-video-camera fa-2x"
          bgColor={'#6870B8'}
          fontColor={'#fff'}
        />

        <DashboardLink
          style="dashboardLink usersLink"
          type="users"
          icon="fa fa-users fa-2x"
          bgColor={'#774C60'}
          fontColor={'#fff'}
        />

      </div>
    );
  }
}
