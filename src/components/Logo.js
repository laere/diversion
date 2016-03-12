import React, { Component } from 'react';
import { Link } from 'react-router';

const Logo = (props) => {
  return (
    <div>
      <Link to={props.path}>
        <h1 className={props.className}>Diversion</h1>
      </Link>
    </div>
  );
};

export default Logo;
