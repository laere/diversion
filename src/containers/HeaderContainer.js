import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import Logo from '../components/Logo';


import { connect } from 'react-redux';
import { getInput, getUsers } from '../actions/actions';


class HeaderContainer extends Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e) {
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  handleOnClick(e) {
    e.preventDefault();
    const { getUsers, input } = this.props;
    getUsers(input);
  }

  render() {

    const { input } = this.props;

    return (
      <header>
        <div className="mainHeader">
          <Logo path='/' className="logo" />
          <Searchbar
            input={input}
            onChange={this.handleOnChange}
            onClick={this.handleOnClick}
         />
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.input,
    users: state.users
  };
};

export default connect(mapStateToProps, { getInput, getUsers } )(HeaderContainer);
