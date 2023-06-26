import React, { useState } from 'react';

import DynamicList from '../dynamic-list/dynamic-list.component';
import UserItem from '../user-item/user-item.component';
import UserAddForm from '../user-item/user-add-form.component';

const UsersView = () => {
  const [filter, setFilter] = useState('');
  const [addFormIsVisible, setAddFormIsVisible] = useState(false);

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

  const handleCreateUser = async (firstName, lastName, email) => {
    console.log(firstName, lastName, email);
  };

  return (
    <div className="">
      <div className="flex flex-col p-4 sm:flex-row sm:justify-between">
        <button
          className={
            'btn-primary mb-3 sm:mb-0 ' + (addFormIsVisible ? 'hidden' : '')
          }
          onClick={() => setAddFormIsVisible(true)}
        >
          Add new User
        </button>
        <input
          type="text"
          placeholder="Search users"
          className="text-input"
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <DynamicList
        columns={columns}
        rows={rows}
        filter={filter}
        filterBy="firstName"
        createAction={handleCreateUser}
        ItemComponent={UserItem}
        AddFormComponent={UserAddForm}
        showAdd={addFormIsVisible}
        setShowAdd={setAddFormIsVisible}
      />
    </div>
  );
};

export default UsersView;
