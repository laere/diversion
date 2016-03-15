import React, { Component } from 'react';

const VideosListItem = ({ key, game, name, link, image }) => {
  return (
    <div key={key} className=".contentListItem">
      <span>{game}</span>
      <span>{name}</span>
      <div>
        <a href={link}>
          <img src={image} alt="image" />
        </a>
      </div>
      <span></span>
      <span></span>
    </div>
  );
}

export default VideosListItem
