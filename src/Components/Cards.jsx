import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateuserdetails } from '../Redux-Slice/userInfoSlice.js';

const Cards = ({ roomNo }) => {

  const dispatch = useDispatch();
  const { userdetails } = useSelector(state => state.userinfo);

  const RoomChangeHandler = () => {
    dispatch(updateuserdetails({...userdetails, room: roomNo}))
  }

  return (
    <>
      <div onClick={RoomChangeHandler} className="room-card">{roomNo}</div>
    </>
  );
};

export default Cards;
