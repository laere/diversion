import React, { Component } from 'react';

const Searchbar = ( { input, onChange } ) => {
  return (
    <form >
      <div className="searchbar">
        <input type="text" placeholder="Search..." onChange={onChange} value={input}/>
      </div>
    </form>
  );
};

export default Searchbar;
