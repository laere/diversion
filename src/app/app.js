import React, { Component } from 'react';
import Dashboard from '../containers/Dashboard';

export default class App extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        {this.props.children}
      </div>
    );
  }
}
