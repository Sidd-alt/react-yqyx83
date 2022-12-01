import React from 'react';
import Cards from '../../../Components/Cards.jsx';

const RoomSelection = () => {
  return (
    <>
      <div id="card-wrapper">
        {[
          'Single room',
          'Double room',
          'Suites',
          'Deluxe room',
          'Presedential',
        ].map((roomNo) => (
          <Cards key={roomNo} roomNo={roomNo} />
        ))}
      </div>
    </>
  );
};

export default RoomSelection;
