import React, { Component } from 'react';
import Dashboard from '../containers/Dashboard';
import Header from '../containers/HeaderContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        {this.props.children}
      </div>
    );
  }
}
