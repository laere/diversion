import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardLink from '../components/DashboardLink';
import { selectDashboardIcon } from '../actions/actions';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.handleSelectIconClick = this.handleSelectIconClick.bind(this);
  }

  handleSelectIconClick(e) {
    e.preventDefault();
    console.log('click click');
    // const { selectDashboardIcon } = this.props;
    // selectDashboardIcon();
  }

  render() {

    // const { dashboardIconSelected } = this.props;
    // const selected = dashboardIconSelected ? '#000' : '#fff';

    return (
      <div className="dashboard">

        <DashboardLink
          className="dashboardLink streamsLink"
          link="streams"
          icon="fa fa-desktop fa-2x"
        />

        <DashboardLink
          className="dashboardLink gamesLink"
          link="games"
          icon="fa fa-gamepad fa-2x"
        />

        <DashboardLink
          className="dashboardLink videosLink"
          link="videos"
          icon="fa fa-video-camera fa-2x"
        />

        <DashboardLink
          className="dashboardLink usersLink"
          link="users"
          icon="fa fa-users fa-2x"
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dashboardIconSelected: state.dashboardIconSelected
  };
};

export default connect(mapStateToProps, { selectDashboardIcon } )(Dashboard);
