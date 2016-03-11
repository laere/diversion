import React from 'react';

const Headline = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.headline}</h3>
    </div>
  );
};

export default Headline;
