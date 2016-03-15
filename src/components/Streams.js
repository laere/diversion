import React from 'react';

import MainContent from '../components/MainContent';
import Heading from '../components/Heading';

const Streams = () => {
  return (
    <div className="streamsContainer">
      <MainContent>
        <Heading
          className="streamsHeader header"
          header="Streams"/>
      </MainContent>
    </div>
  );
};

export default Streams;
