import React, { Component } from 'react';


const Searchbar = ( { input, onChange } ) => {
  return (
    <div>
      <div className="twitchButton">
        <img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" className="twitch-connect" href="#" />
      </div>
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
