import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ExportJsonCsv from 'react-export-json-csv';
import 'jspdf-autotable';
const { jsPDF } = require('jspdf');

const headers = [
  {
    key: 'name',
    name: 'Name',
  },
  {
    key: 'email',
    name: 'Email',
  },
  {
    key: 'phone',
    name: 'Phone NO.',
  },
  {
    key: 'adults',
    name: 'Adult',
  },
  {
    key: 'children',
    name: 'Children',
  },
  {
    key: 'checkin',
    name: 'Check-In',
  },
  {
    key: 'checkout',
    name: 'Check-Out',
  },
  {
    key: 'room',
    name: 'Room',
  },
];

const Admin = () => {
  const [filter, setFilter] = useState({
    checkin: '',
    checkout: '',
    room: '',
  });
  const { checkin, checkout, room } = filter;
  const { userlist } = useSelector((state) => state.admin);
  const [USERLIST, SETUSERLIST] = useState(userlist);

  const onChangeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleApplyFilter = () => {
    const filteredItems = USERLIST.filter(function (item) {
      if (checkin && checkout && room) {
        return (
          item.checkin >= checkin &&
          item.checkout <= checkout &&
          item.room === room
        );
      } else if (checkin && checkout && !room) {
        return item.checkin >= checkin && item.checkout <= checkout;
      } else if (checkin && !checkout && !room) {
        return item.checkin >= checkin;
      } else if (!checkin && checkout && room) {
        return item.checkout <= checkout && item.room === room;
      } else if (!checkin && checkout && !room) {
        return item.checkout <= checkout;
      } else if (!checkin && !checkout && room) {
        return item.room === room;
      } else if (checkin && !checkout && room) {
        return item.checkin >= checkin && item.room === room;
      } else if (!checkin && !checkout && !room) {
        return true;
      }
    });

    console.log(filteredItems);
    SETUSERLIST(filteredItems);
  };
  const handleReset = () => {
    SETUSERLIST(userlist);
    setFilter({ ...filter, checkin: '', checkout: '', room: '' });
  };

  const print = () => {
    const pdf = new jsPDF('p', 'pt', 'a4');
    const columns = [
      'Name',
      'Email',
      'Phone No.',
      'Adult',
      'Children',
      'Check-In',
      'Check-Out',
      'Room',
    ];
    var rows = [];

    for (let i = 0; i < userlist.length; i++) {
      var temp = [
        userlist[i].name,
        userlist[i].email,
        userlist[i].phone,
        userlist[i].adults,
        userlist[i].children,
        userlist[i].checkin.split('T')[0],
        userlist[i].checkout.split('T')[0],
        userlist[i].room,
      ];
      rows.push(temp);
    }
    pdf.text(235, 40, 'Tabla de Prestamo');
    pdf.autoTable(columns, rows, {
      startY: 65,
      theme: 'grid',
      styles: {
        font: 'times',
        halign: 'center',
        cellPadding: 3.5,
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        textColor: [0, 0, 0],
      },
      headStyles: {
        textColor: [0, 0, 0],
        fontStyle: 'normal',
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fillColor: [166, 204, 247],
      },
      alternateRowStyles: {
        fillColor: [212, 212, 212],
        textColor: [0, 0, 0],
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
      rowStyles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
      tableLineColor: [0, 0, 0],
    });
    console.log(pdf.output('datauristring'));
    pdf.save('pdf');
  };

  return (
    <div>
      <div className="filter-navbar">
        <div className="input-wrapper">
          <label>CheckIn</label>
          <input
            name="checkin"
            onChange={onChangeHandler}
            value={checkin}
            type="datetime-local"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <label>CheckOut</label>
          <input
            name="checkout"
            onChange={onChangeHandler}
            value={checkout}
            type="datetime-local"
            className="input-field"
          />
        </div>
        <div className="input-wrapper">
          <label>Room</label>
          <select
            className="input-field"
            name="room"
            onChange={onChangeHandler}
            value={room}
            defaultValue={''}
          >
            {[
              'All',
              'Single room',
              'Double room',
              'Suites',
              'Deluxe room',
              'Presedential',
            ].map((room) => (
              <option value={room}>{room}</option>
            ))}
          </select>
        </div>
        <div
          style={{
            margin: '10px 0px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <button
            style={{ width: '100px' }}
            className="button-next"
            onClick={handleReset}
          >
            Reset filter
          </button>
          <button
            style={{ width: '100px' }}
            className="button-next"
            onClick={handleApplyFilter}
          >
            Apply filter
          </button>
          {USERLIST.length > 0 && (
            <>
              <ExportJsonCsv
                style={{
                  width: '80px',
                  height: '40px',
                  color: 'wheat',
                  backgroundColor: 'black',
                  fontSize: '15px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
                headers={headers}
                items={userlist}
              >
                Export Csv
              </ExportJsonCsv>

              <button
                style={{ width: '100px' }}
                className="button-next"
                onClick={print}
              >
                Download PDF
              </button>
            </>
          )}
        </div>
      </div>
      <div style={{ overflowX: 'auto' }}>
        {USERLIST.length > 0 && (
          <table style={{ background: 'black' }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Adult</th>
              <th>Children</th>
              <th>Check-IN</th>
              <th>Check-OUT</th>
              <th>Room</th>
            </tr>
            {USERLIST.map(
              ({
                name,
                email,
                phone,
                adults,
                children,
                checkin,
                checkout,
                room,
              }) => (
                <tr>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{adults}</td>
                  <td>{children}</td>
                  <td>{checkin.split("T")}</td>
                  <td>{checkout.split("T")}</td>
                  <td>{room}</td>
                </tr>
              )
            )}
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;
