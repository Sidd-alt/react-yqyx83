import React, { useState } from 'react';
import Stepper from '../../Components/Stepper';
import NavButton from '../../Components/NavButton';
import UserInfoPage from './UserPages/user-details-page.jsx';
import RoomSelection from './UserPages/room-selection-page.jsx';
import { useSelector, useDispatch } from 'react-redux';

const User = () => {
  const dispatch = useDispatch();
  const { stepperNo } = useSelector((state) => state.userinfo);

  return (
    <div id="main-container">
      <div id="main-wrapper">
        <Stepper />
        {stepperNo === 1 ? (
          <UserInfoPage />
        ) : (
          stepperNo === 2 && <RoomSelection />
        )}
        <NavButton />
      </div>
    </div>
  );
};

export default User;
