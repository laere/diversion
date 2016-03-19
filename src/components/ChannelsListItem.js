import React, { Component } from 'react';

const ChannelsListItem = ({ key, game, status, name, url, image, views, followers }) => {
  return (
    <div className="contentListItem">
      <span>{game}</span>
    </div>
  );
}

export default ChannelsListItem;
