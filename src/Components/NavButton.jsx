import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateStepperNo,
  updateuserdetails,
} from '../Redux-Slice/userInfoSlice.js';
import { updateUserList } from '../Redux-Slice/adminSlice.js';

const NavButton = () => {
  const dispatch = useDispatch();
  const { userdetails, stepperNo } = useSelector((state) => state.userinfo);
  const { userlist } = useSelector((state) => state.admin);

  const clearInformation = () => {
    let obj = {
      name: '',
      email: '',
      phone: '',
      adults: '',
      children: '',
      checkin: '',
      checkout: '',
    };
    dispatch(updateuserdetails(obj));
    dispatch(updateStepperNo(1));
  };

  useEffect(() => {
    if (stepperNo === 3) {
      let tempArr = userlist.slice();
      tempArr.push(userdetails);
      dispatch(updateUserList(tempArr));
    }
  }, [stepperNo]);

  const handleNextButton = () => {
    if (stepperNo === 1) {
      if (!Object.values(userdetails).every((item) => item)) {
        return alert('Please provide all the required information');
      }
    }
    if (stepperNo === 2 && !userdetails.room) {
      return alert('Please select any one guest room');
    }
    if (stepperNo !== 0 || stepperNo !== 3) {
      return dispatch(updateStepperNo(stepperNo + 1));
    }
  };

  const handleBackButton = () => {
    // console.log(stepperNo);
    if (stepperNo !== 0 || stepperNo !== 3) {
      dispatch(updateStepperNo(stepperNo - 1));
    }
  };

  return (
    <div id="button-wrapper">
      {stepperNo === 2 && (
        <button className="button-back" onClick={handleBackButton}>
          <span>BACK</span>
        </button>
      )}
      {stepperNo === 3 ? (
        <button className="button-next-new-user" onClick={clearInformation}>
          <span>ENTER NEW USER INFORMATION</span>
        </button>
      ) : (
        <button className="button-next" onClick={handleNextButton}>
          <span>NEXT</span>
        </button>
      )}
    </div>
  );
};

export default NavButton;
