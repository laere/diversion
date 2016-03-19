import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { getInput } from '../reducers/InputReducer';
import { channelsFetchActions } from '../reducers/ChannelsReducer';

class HeaderContainer extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    channels: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { getInput } = this.props;
    getInput(e.target.value);
  }

  handleOnClick() {
    console.log('test test');
    const { getInput } = this.props;
    getInput(input);
  }

  render() {
    const { input } = this.props;
    return (
      <Header
        input={input}
        onChange={this.handleOnChange}
        onClick={this.handleOnClick} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      channels: state.channels,
      input: state.input
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      getInput: (input) => dispatch(channelsFetchActions({params: {input}}))
    }
  }

  export default connect(mapStateToProps, {getInput})(HeaderContainer);
