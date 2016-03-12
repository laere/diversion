import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import Logo from '../components/Logo';

import { connect } from 'react-redux';
import { getInput } from '../actions/actions';


class HeaderContainer extends Component {

  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
  }

  render() {

    const { input, getInput } = this.props;

    return (
    <header>
      <div className="mainHeader">
        <Logo
          path='/'
          className="logo"
        />
        <Searchbar

        />
      </div>
    </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.input
  };
};

export default connect(mapStateToProps, { getInput } )(HeaderContainer);
