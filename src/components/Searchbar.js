import React, { Component } from 'react';


const Searchbar = ( { input, onChange, onClick } ) => {
  return (
    <div>
        {/*<input type="submit" value="Search" className="searchbarBtn" />*/}
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

export default Searchbar;
