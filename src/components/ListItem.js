import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { key, game, name, url, image, views, viewers, followers } = this.props;
    return (
      <div key={key} className="contentListItem">
        <span>{game}</span>
        <span>{name}</span>
        <div>
          <a href={url} target="_blank">
            <img src={image}/>
          </a>
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  game: React.PropTypes.string,
  name: React.PropTypes.string,
  url: React.PropTypes.string,
  image: React.PropTypes.string,
  views: React.PropTypes.string,
  followers: React.PropTypes.string,
  viewers: React.PropTypes.string
};
