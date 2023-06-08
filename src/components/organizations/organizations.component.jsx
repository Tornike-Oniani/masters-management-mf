import React, { useState, useEffect, useRef } from 'react';

import OrganizationItem from '../../components/organization-item/organization-item.component';
import DynamicList from '../../components/dynamic-list/dynamic-list.component';

const Organizations = ({ setCrumbs }) => {
  const addOrgRef = useRef(null);
  const [filter, setFilter] = useState('');
  const [addFormIsVisible, setAddFromIsVisible] = useState(false);

  useEffect(() => {
    setCrumbs([
      {
        path: '/',
        label: 'Organizations',
      },
    ]);
    if (addFormIsVisible) {
      addOrgRef.current.focus();
    }
  }, [addFormIsVisible]);

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const columns = [
    { accessor: 'id', label: '#' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'roles', label: 'Roles' },
    { accessor: 'applications', label: 'Applications' },
    { accessor: 'users', label: 'Users' },
    { accessor: 'actions', label: 'Actions' },
  ];
  const rows = [
    {
      id: 1,
      name: 'Organization 1',
      roles: 4,
      applications: 5,
      users: 6,
    },
    {
      id: 2,
      name: 'Organization 2',
      roles: 1,
      applications: 4,
      users: 3,
    },
    {
      id: 3,
      name: 'Organization 3',
      roles: 6,
      applications: 9,
      users: 10,
    },
    {
      id: 4,
      name: 'Organization 4',
      roles: 3,
      applications: 7,
      users: 7,
    },
    {
      id: 5,
      name: 'Organization 5',
      roles: 2,
      applications: 6,
      users: 7,
    },
    {
      id: 6,
      name: 'Organization 6',
      roles: 1,
      applications: 1,
      users: 3,
    },
    {
      id: 7,
      name: 'Organization 7',
      roles: 3,
      applications: 8,
      users: 8,
    },
    {
      id: 8,
      name: 'Organization 8',
      roles: 9,
      applications: 10,
      users: 8,
    },
    {
      id: 9,
      name: 'Organization 9',
      roles: 7,
      applications: 10,
      users: 1,
    },
    {
      id: 10,
      name: 'Organization 10',
      roles: 8,
      applications: 9,
      users: 9,
    },
    {
      id: 11,
      name: 'Organization 11',
      roles: 5,
      applications: 3,
      users: 2,
    },
    {
      id: 12,
      name: 'Organization 12',
      roles: 1,
      applications: 4,
      users: 8,
    },
    {
      id: 13,
      name: 'Organization 13',
      roles: 2,
      applications: 3,
      users: 2,
    },
    {
      id: 14,
      name: 'Organization 14',
      roles: 1,
      applications: 5,
      users: 3,
    },
    {
      id: 15,
      name: 'Organization 15',
      roles: 6,
      applications: 5,
      users: 6,
    },
    {
      id: 16,
      name: 'Organization 16',
      roles: 4,
      applications: 5,
      users: 9,
    },
    {
      id: 17,
      name: 'Organization 17',
      roles: 2,
      applications: 7,
      users: 6,
    },
    {
      id: 18,
      name: 'Organization 18',
      roles: 8,
      applications: 2,
      users: 8,
    },
    {
      id: 19,
      name: 'Organization 19',
      roles: 3,
      applications: 5,
      users: 4,
    },
    {
      id: 20,
      name: 'Organization 20',
      roles: 10,
      applications: 8,
      users: 6,
    },
    {
      id: 21,
      name: 'Organization 21',
      roles: 1,
      applications: 6,
      users: 10,
    },
    {
      id: 22,
      name: 'Organization 22',
      roles: 1,
      applications: 5,
      users: 10,
    },
    {
      id: 23,
      name: 'Organization 23',
      roles: 4,
      applications: 3,
      users: 1,
    },
    {
      id: 24,
      name: 'Organization 24',
      roles: 5,
      applications: 1,
      users: 2,
    },
    {
      id: 25,
      name: 'Organization 25',
      roles: 7,
      applications: 2,
      users: 1,
    },
    {
      id: 26,
      name: 'Organization 26',
      roles: 1,
      applications: 3,
      users: 6,
    },
    {
      id: 27,
      name: 'Organization 27',
      roles: 10,
      applications: 5,
      users: 7,
    },
    {
      id: 28,
      name: 'Organization 28',
      roles: 5,
      applications: 1,
      users: 10,
    },
    {
      id: 29,
      name: 'Organization 29',
      roles: 10,
      applications: 4,
      users: 9,
    },
    {
      id: 30,
      name: 'Organization 30',
      roles: 9,
      applications: 3,
      users: 10,
    },
    {
      id: 31,
      name: 'Organization 31',
      roles: 3,
      applications: 4,
      users: 1,
    },
    {
      id: 32,
      name: 'Organization 32',
      roles: 8,
      applications: 4,
      users: 6,
    },
    {
      id: 33,
      name: 'Organization 33',
      roles: 10,
      applications: 4,
      users: 6,
    },
    {
      id: 34,
      name: 'Organization 34',
      roles: 3,
      applications: 8,
      users: 2,
    },
    {
      id: 35,
      name: 'Organization 35',
      roles: 7,
      applications: 9,
      users: 2,
    },
  ];

  return (
    <div className="bg-white rounded shadow-md overflow-auto">
      <h3 className="font-semibold text-xl px-4 pt-4 text-gray-600">
        Available Organizations
      </h3>
      <div className="flex justify-between p-4">
        <div className="">
          <button
            className={'btn-primary ' + (addFormIsVisible ? 'hidden' : '')}
            onClick={() => {
              setAddFromIsVisible(true);
            }}
          >
            Add Organization
          </button>
          <div
            className={
              'flex items-center ' + (addFormIsVisible ? '' : 'hidden')
            }
          >
            <input
              ref={addOrgRef}
              type="text"
              className="text-input mr-2"
              placeholder="Organization name"
            />
            <button
              className="btn-primary w-24 mr-2"
              onClick={() => setAddFromIsVisible(false)}
            >
              Save
            </button>
            <button
              className="btn-primary w-24"
              onClick={() => setAddFromIsVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search organization"
          id="searchOrganization"
          className="text-input"
          onChange={handleSearch}
        />
      </div>
      <DynamicList
        columns={columns}
        rows={rows}
        filter={filter}
        ItemComponent={OrganizationItem}
      />
    </div>
  );
};

export default Organizations;
