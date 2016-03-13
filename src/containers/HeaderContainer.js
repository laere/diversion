import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import Logo from '../components/Logo';


import { connect } from 'react-redux';
import { getInput, getStreams } from '../actions/actions';


class HeaderContainer extends Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    const { getStreams } = this.props;
    getStreams();
  }

  render() {

    const { input, getInput } = this.props;

    return (
      <header>
        <div className="mainHeader">
          <Logo path='/' className="logo" />
          <Searchbar input={input} onSubmit={this.handleOnSubmit} onChange={this.handleOnChange} />
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.input,
    streams: state.streams
  };
};

export default connect(mapStateToProps, { getInput, getStreams } )(HeaderContainer);
