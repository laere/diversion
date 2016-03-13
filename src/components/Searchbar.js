import React, { Component } from 'react';


const Searchbar = ( { input, onChange, onSubmit } ) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <button className="searchbarBtn">
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
      </form>
    </div>

  );
};

export default Searchbar;
