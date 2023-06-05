import React from 'react';

import DynamicList from '../dynamic-list/dynamic-list.component';
import ApplicationItem from '../application-item/application-item.component';

const ApplicationsView = () => {
  const columns = [
    { accessor: 'id', label: '#' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'permissions', label: 'Permissions' },
    { accessor: 'actions', label: 'Actions' },
  ];
  const rows = [
    {
      id: 1,
      name: 'Application 1',
      permissions: 35,
    },
    {
      id: 2,
      name: 'Application 2',
      permissions: 44,
    },
  ];
  return (
    <div className="">
      <div className="flex items-center justify-between p-4">
        <button className="btn-primary">Add new Application</button>
        <input
          type="text"
          className="text-input"
          placeholder="Search application"
        />
      </div>
      <DynamicList
        columns={columns}
        rows={rows}
        ItemComponent={ApplicationItem}
      />
    </div>
  );
};

export default ApplicationsView;
