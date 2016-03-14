import React, { Component } from 'react';

const ListItem = (props) => {
  return (
    <div className="placeholder">
      <li key={props.key}>
        {props.game}
      </li>
    </div>
  );
};

export default ListItem;
