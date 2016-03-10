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
          link="Streams"
          icon="fa fa-desktop fa-2x"
        />
        <DashboardLink
          link="Games"
          icon="fa fa-gamepad fa-2x"
        />
        <DashboardLink
          link="Videos"
          icon="fa fa-video-camera fa-2x"
        />
        <DashboardLink
          link="Users"
          icon="fa fa-users fa-2x"
        />
      </div>
    );
  }
}
