import React from 'react';
import Cards from '../../../Components/Cards.jsx';

const RoomSelection = () => {
  return (
    <>
      <div id="card-wrapper">
        {[1, 2, 3, 4, 5].map((roomNo) => (
          <Cards roomNo={roomNo} />
        ))}
      </div>
    </>
  );
};

export default RoomSelection;
