import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateuserdetails,
  setroomSelected,
} from '../Redux-Slice/userInfoSlice.js';

const Cards = ({ roomNo }) => {
  const dispatch = useDispatch();
  const { userdetails } = useSelector((state) => state.userinfo);

  const { room } = userdetails;

  const RoomChangeHandler = () => {
    dispatch(updateuserdetails({ ...userdetails, room: roomNo }));
  };

  return (
    <>
      <div
        style={{
          boxShadow:
            // roomNo === hightlightCard
            // ? 'inset -1px 6px 5px 0px #ddd0d08c'
            'inset -1px 6px 5px 0px #0000008c',
          background:
            roomNo === 'Single room'
              ? 'brown'
              : roomNo === 'Double room'
              ? 'cadetblue'
              : roomNo === 'Suites'
              ? 'chocolate'
              : roomNo === 'Deluxe room'
              ? 'mediumslateblue'
              : roomNo === 'Presedential' && 'seagreen',
        }}
        onClick={RoomChangeHandler}
        className="room-card"
      >
        <div>{roomNo}</div>
        {room === roomNo && <div>&#10003;</div>}
      </div>
    </>
  );
};

export default Cards;
