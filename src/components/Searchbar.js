import React, { Component } from 'react';

const Searchbar = (props) => {
  return (
    <div className="searchbar">
      <i className="fa fa-search" />
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Searchbar;
