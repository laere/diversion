import React, { Component } from 'react';

export default class MainContent extends Component {
  render() {
    return (
      <div className="mainContentWrapper">
        {this.props.children}
      </div>
    );
  }

}
