import React, { Component } from 'react';
import DashboardLink from '../components/DashboardLink';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        
        <DashboardLink
          className="dashboardLink streamsLink"
          link="streams"
          icon="fa fa-desktop fa-2x"
          bgColor={'#09BC8A'}
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
          bgColor={'#6870B8'}
          fontColor={'#fff'}
        />

        <DashboardLink
          className="dashboardLink usersLink"
          link="users"
          icon="fa fa-users fa-2x"
          bgColor={'#774C60'}
          fontColor={'#fff'}
        />

      </div>
    );
  }
}
