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
    let tempArr = userlist.slice();
    tempArr.push(userdetails);
    dispatch(updateUserList(tempArr));
    dispatch(updateuserdetails(obj));
    dispatch(updateStepperNo(1));
  };

  useEffect(() => {
    // if (stepperNo === 3) {
    //   setTimeout(clearInformation, 3000);
    // }
  }, [stepperNo]);

  const handleNextButton = () => {
    console.log(userdetails);
    if (stepperNo !== 0 || stepperNo !== 3) {
      dispatch(updateStepperNo(stepperNo + 1));
    }
  };

  const handleBackButton = () => {
    console.log(stepperNo);
    if (stepperNo !== 0 || stepperNo !== 3) {
      dispatch(updateStepperNo(stepperNo - 1));
    }
  };

  return (
    <div id="button-wrapper">
      {stepperNo === 1 ? null : (
        <button className="button-back" onClick={handleBackButton}>
          <span>BACK</span>
        </button>
      )}
      {stepperNo === 3 ? null : (
        <button className="button-next" onClick={handleNextButton}>
          <span>NEXT</span>
        </button>
      )}
    </div>
  );
};

export default NavButton;
