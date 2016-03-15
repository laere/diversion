import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { key, game, name, url, image, views, viewers, followers } = this.props;
    return (
      <div key={key} className="contentListItem">
        <span>{game}</span>
        <div>
          <a href={url} target="_blank">
            <img src={image}/>
          </a>
        </div>
        <div>
          <span>{viewers} viewers on <strong>{name}</strong></span>
          <span className='contentListItemFollowers'>{followers}</span>
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
  views: React.PropTypes.number,
  followers: React.PropTypes.number,
  viewers: React.PropTypes.number
};
