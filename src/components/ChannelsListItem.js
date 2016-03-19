import React, { Component } from 'react';

const ChannelsListItem = ({ channelObj }) => {
  return (
    <div className="contentListItem">
      <span>{channelObj.name}</span>
    </div>
  );
}

export default ChannelsListItem;
