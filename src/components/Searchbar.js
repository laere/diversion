import React, { Component } from 'react';

const Searchbar = ( { input, onChange, onClick } ) => {
  return (
    <div>
      <button onClick={onClick} className="searchbarBtn">
        <i className="fa fa-search"></i>
      </button>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search..."
          onChange={onChange}
          value={input}
          />
      </div>
    </div>

  );
};

Searchbar.propTypes = {
  input: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onClick: React.PropTypes.func,
}

export default Searchbar;
