import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as DownloadIcon } from '../../Assets/download.svg';
import UserDataCard from '../../Components/UserDataCard.jsx';

const Admin = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    checkin: '',
    checkout: '',
    room: '',
  });
  const { checkin, checkout, room } = filter;
  const { userlist } = useSelector((state) => state.admin);
  const { userdetails } = useSelector((state) => state.userinfo);
  const [USERLIST, SETUSERLIST] = useState(userlist);

  const onChangeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    console.log(checkin, checkout);
    const filteredItems = USERLIST.filter(
      (item) => item.checkin >= checkin && item.checkout <= checkout
    );

    console.log(filteredItems);
    SETUSERLIST(filteredItems);
  };

  return (
    <div>
      <div>
        <label>CheckIn</label>
        <input
          name="checkin"
          onChange={onChangeHandler}
          value={checkin}
          type="datetime-local"
        />
        <label>CheckOut</label>
        <input
          name="checkout"
          onChange={onChangeHandler}
          value={checkout}
          type="datetime-local"
        />
        <label>Room</label>
        <select name="room" onChange={onChangeHandler} value={room}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={handleApplyFilter}>Apply filter</button>
      </div>
      {USERLIST.map((data) => (
        <UserDataCard data={data} />
      ))}
    </div>
  );
};

export default Admin;
