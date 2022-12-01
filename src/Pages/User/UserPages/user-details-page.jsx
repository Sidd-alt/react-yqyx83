import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateuserdetails } from '../../../Redux-Slice/userInfoSlice.js';

const UserInfoPage = () => {
  const { userdetails } = useSelector((state) => state.userinfo);
  const dispatch = useDispatch();
  const { name, email, phone, adults, children, checkin, checkout } =
    userdetails;

  const onChangeHandler = (e) => {
    dispatch(
      updateuserdetails({ ...userdetails, [e.target.name]: e.target.value })
    );
  };

  return (
    <>
      <div id="form-container">
        <div className="input-wrapper">
          <label className="label-field">Name</label>
          <input
            name="name"
            value={name}
            className="input-field"
            onChange={onChangeHandler}
          />
        </div>

        <div className="input-wrapper">
          <label className="label-field">Email ID</label>
          <input
            name="email"
            value={email}
            type="email"
            className="input-field"
            onChange={onChangeHandler}
          />
        </div>

        <div className="input-wrapper">
          <label className="label-field">Phone NO.</label>
          <input
            name="phone"
            value={phone}
            type="number"
            className="input-field"
            onChange={onChangeHandler}
          />
        </div>

        <div className="person-count-wrapper">
          <div className="input-wrapper">
            <label className="label-field">Adults</label>
            <input
              name="adults"
              value={adults}
              type="number"
              className="input-field-2"
              onChange={onChangeHandler}
            />
          </div>

          <div className="input-wrapper">
            <label className="label-field">Children</label>
            <input
              name="children"
              value={children}
              type="number"
              className="input-field-2"
              onChange={onChangeHandler}
            />
          </div>
        </div>

        {/* <div className="person-count-wrapper"> */}
        <div className="input-wrapper">
          <label className="label-field">Check-IN</label>
          <input
            name="checkin"
            value={checkin}
            type="datetime-local"
            className="input-field"
            onChange={onChangeHandler}
          />
        </div>

        <div className="input-wrapper">
          <label className="label-field">Check-OUT</label>
          <input
            name="checkout"
            value={checkout}
            type="datetime-local"
            className="input-field"
            onChange={onChangeHandler}
          />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default UserInfoPage;
