import React from 'react';

const UserDataCard = ({ data }) => {
  const { name, email, phone, adults, children, checkin, checkout } = data;

  return (
    <>
      <div id="user-card-wrapper">
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '-15px 0px',
          }}
        >
          <p>{`A : ${adults}`}</p>
          <p>{`C : ${children}`}</p>
        </div>
        <p>Check in time : {checkin}</p>
        <p>Check out time: {checkout}</p>
      </div>
    </>
  );
};

export default UserDataCard;
