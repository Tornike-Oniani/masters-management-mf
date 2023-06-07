import React, { useState } from 'react';

import DynamicList from '../dynamic-list/dynamic-list.component';
import UserItem from '../user-item/user-item.component';
import Popup from '../popup/popup.component';

const UsersView = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const columns = [
    { accessor: 'id', label: '#' },
    { accessor: 'firstName', label: 'First Name' },
    { accessor: 'lastName', label: 'Last Name' },
    { accessor: 'email', label: 'Email' },
    { accessor: 'roles', label: 'Roles' },
    { accessor: 'actions', label: 'Actions' },
  ];
  const rows = [
    {
      id: 1,
      firstName: 'fHevW',
      lastName: 'tDOihyc',
      email: 'xnvDWvnt@hotmail.com',
      roles: ['Teacher'],
    },
    {
      id: 2,
      firstName: 'JUpEZ',
      lastName: 'siPQMAB',
      email: 'oLcByIHB@gmail.com',
      roles: ['Auditor'],
    },
    {
      id: 3,
      firstName: 'euAGm',
      lastName: 'EIpXnah',
      email: 'GQTmjczT@hotmail.com',
      roles: ['Manager', 'Analyst'],
    },
    {
      id: 4,
      firstName: 'uShTO',
      lastName: 'eIzXMUc',
      email: 'UblAVmjG@gmail.com',
      roles: ['Teacher', 'Auditor'],
    },
    {
      id: 5,
      firstName: 'vRZid',
      lastName: 'uDjOqZM',
      email: 'IVOubicX@example.com',
      roles: ['Teacher', 'Manager', 'Analyst'],
    },
    {
      id: 6,
      firstName: 'DAbyY',
      lastName: 'kCmYKca',
      email: 'DcfFEaVt@gmail.com',
      roles: ['Analyst', 'Auditor', 'Manager'],
    },
    {
      id: 7,
      firstName: 'ZnjkM',
      lastName: 'kQwyzjR',
      email: 'JGxrmsiQ@example.com',
      roles: ['Analyst'],
    },
    {
      id: 8,
      firstName: 'MocBI',
      lastName: 'uTrTpyJ',
      email: 'gihrIrhg@yahoo.com',
      roles: ['Auditor', 'Teacher', 'Manager'],
    },
    {
      id: 9,
      firstName: 'dMQHA',
      lastName: 'AwNaizu',
      email: 'gaDOesTK@gmail.com',
      roles: ['Teacher'],
    },
    {
      id: 10,
      firstName: 'JnNuc',
      lastName: 'LQjCKQC',
      email: 'PsLmUMEE@example.com',
      roles: ['Analyst'],
    },
    {
      id: 11,
      firstName: 'FaLUQ',
      lastName: 'xomneAR',
      email: 'vKWtEgbP@hotmail.com',
      roles: ['Auditor', 'Teacher', 'Analyst'],
    },
    {
      id: 12,
      firstName: 'nOMnH',
      lastName: 'fECMDsm',
      email: 'heVpChxw@hotmail.com',
      roles: ['Auditor'],
    },
    {
      id: 13,
      firstName: 'uchyn',
      lastName: 'DuTmyIm',
      email: 'GzTbOLxE@example.com',
      roles: ['Manager', 'Auditor'],
    },
    {
      id: 14,
      firstName: 'RhFOi',
      lastName: 'tvahKtb',
      email: 'JmtIirfg@hotmail.com',
      roles: ['Manager'],
    },
  ];

  return (
    <div className="">
      <Popup
        isVisible={isPopupVisible}
        setIsVisible={setIsPopupVisible}
        title="Add new user"
        label="Please fill in all the mandatory fields."
      >
        <div className="flex flex-col">
          <label htmlFor="first_name" className="font-base font-semibold mb-1">
            First name*
          </label>
          <input
            type="text"
            id="first_name"
            className="text-input mb-3"
            placeholder="John"
          />
          <label htmlFor="last_name" className="font-base font-semibold mr-1">
            Last name*
          </label>
          <input
            type="text"
            id="first_name"
            className="text-input mb-3"
            placeholder="Doe"
          />
          <label htmlFor="first_name" className="font-base font-semibold mb-1">
            Email*
          </label>
          <input
            type="email"
            id="first_name"
            className="text-input mb-3"
            placeholder="example@gmail.com"
          />
          <div className="flex w-full">
            <button className="btn-primary flex-1 mr-3">Save</button>
            <button className="btn-primary flex-1">Cancel</button>
          </div>
        </div>
      </Popup>
      <div className="flex items-center justify-between p-4">
        <button className="btn-primary" onClick={() => setIsPopupVisible(true)}>
          Add new User
        </button>
        <input type="text" placeholder="Search users" className="text-input" />
      </div>
      <DynamicList columns={columns} rows={rows} ItemComponent={UserItem} />
    </div>
  );
};

export default UsersView;
