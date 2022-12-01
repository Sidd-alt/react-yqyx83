import React, { useState } from 'react';
import Admin from '../Pages/Admin/Admin.jsx';
import User from '../Pages/User/User.jsx';

const Route = () => {
  const [currentUserType, setcurrentUserType] = useState('user');

  const handleUserPage = () => {
    if (currentUserType === 'user') {
      setcurrentUserType('admin');
    } else if (currentUserType === 'admin') {
      setcurrentUserType('user');
    }
  };

  return (
    <>
      <p style={{ textAlign: 'right' }} onClick={handleUserPage}>
        {currentUserType === 'user' ? 'USER-PAGE' : 'ADMIN-PAGE'}{' '}
      </p>
      {currentUserType === 'user' ? <User /> : <Admin />}
    </>
  );
};

export default Route;
