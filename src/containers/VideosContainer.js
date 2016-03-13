import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Heading from '../components/Heading';
import Videos from '../components/Videos';

import { connect } from 'react-redux';
import { getVideos } from '../actions/actions';

class VideosContainer extends Component {

  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const { getVideos } = this.props;
    getVideos();
  }

  render() {
    return (
      <div className="videosContainer">
        <MainContent>
          <Heading
            className="videosHeader header"
            header="Videos"
          />
          <Videos />
        </MainContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps, { getVideos } )(VideosContainer);
