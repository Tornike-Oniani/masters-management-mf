import React from 'react';

import RolesList from '../roles-list/roles-list.component';

const RolesView = () => {
  const roles = [
    {
      id: 1,
      name: 'Teacher',
      permissions: {
        'Application 1': [
          {
            id: 1,
            name: 'Article Create',
            value: 'article_create',
          },
          {
            id: 1,
            name: 'Article Read',
            value: 'article_read',
          },
        ],
      },
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <button className="btn-primary">Add new role</button>
        <input type="text" placeholder="Search roles" className="text-input" />
      </div>
      <div className="flex">
        <div className="flex flex-col">
          {roles.map((role) => {
            return <div className="">{role}</div>;
          })}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default RolesView;
