import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import Logo from '../components/Logo';


import { connect } from 'react-redux';
import { getInput } from '../actions/actions';


class HeaderContainer extends Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  render() {

    const { input, getInput } = this.props;

    return (
      <header>
        <div className="mainHeader">
          <Logo path='/' className="logo" />
          <Searchbar input={input} onChange={this.handleOnChange} />
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
