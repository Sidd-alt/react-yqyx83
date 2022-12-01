import React, { useState } from 'react';
import Admin from '../Pages/Admin/Admin.jsx';
import User from '../Pages/User/User.jsx';

const Route = () => {
  const [currentUserType, setcurrentUserType] = useState('user');

  const handleUserPage = () => {
    if (currentUserType === 'user') {
      setcurrentUserType('admin');
      document.body.style.backgroundColor = 'rgb(12 9 47)';
    } else if (currentUserType === 'admin') {
      setcurrentUserType('user');
      document.body.style.backgroundColor = 'rgb(120 9 47)';
    }
  };

  return (
    <>
      <p
        style={{ textAlign: 'right', marginRight: '10px' }}
        onClick={handleUserPage}
      >
        {currentUserType === 'user' ? 'GO TO ADMIN-PAGE' : 'GO TO USER-PAGE'}
      </p>
      {currentUserType === 'user' ? <User /> : <Admin />}
    </>
  );
};

export default Route;
