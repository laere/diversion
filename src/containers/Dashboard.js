import React, { Component } from 'react';
import DashboardLink from '../components/DashboardLink';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        {/*streams/channels
        games
        videos
        userss*/}
        <DashboardLink
          link="streams"
          icon="fa fa-desktop fa-2x"
        />
        <DashboardLink
          link="games"
          icon="fa fa-gamepad fa-2x"
        />
        <DashboardLink
          link="videos"
          icon="fa fa-video-camera fa-2x"
        />
        <DashboardLink
          link="users"
          icon="fa fa-users fa-2x"
        />
      </div>
    );
  }
}
