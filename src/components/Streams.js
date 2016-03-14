import React, { Component } from 'react';

import MainContent from '../components/MainContent';
import Heading from '../components/Heading';


const Streams = () => {
  return (
    <div className="streamsContainer">
      <MainContent>
        <Heading
          className="streamsHeader header"
          header="Streams"/>
          <ul>
            {this.props.streams.map((stream, index) => {
              return (
                <li key={index}>
                  {stream.game}
                </li>
              );
            })}
          </ul>
      </MainContent>
    </div>
  );
};

export default Streams;
