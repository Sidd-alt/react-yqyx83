import React, { useState } from 'react';
import Stepper from '../../Components/Stepper';
import NavButton from '../../Components/NavButton';
import UserInfoPage from './UserPages/user-details-page.jsx';
import RoomSelection from './UserPages/room-selection-page.jsx';
import SuccessPage from './UserPages/success-msg-page.jsx';
import { useSelector } from 'react-redux';

const User = () => {
  const { stepperNo } = useSelector((state) => state.userinfo);

  return (
    <div id="main-container">
      <Stepper />
      <div id="main-wrapper">
        {stepperNo === 1 ? (
          <UserInfoPage />
        ) : stepperNo === 2 ? (
          <RoomSelection />
        ) : (
          <SuccessPage />
        )}
      </div>
      <NavButton />
    </div>
  );
};

export default User;
