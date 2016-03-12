import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';
import Searchbar from '../components/Searchbar';
import Logo from '../components/Logo';


export default class HeaderContainer extends Component {
  render() {
    return (
    <header>
      <Wrapper className="mainHeader">
        <Logo
          path='/'
          className="logo"
        />
        <Searchbar />
      </Wrapper>
    </header>
    );
  }
}
