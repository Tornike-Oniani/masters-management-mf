import React from 'react';

import RolesList from '../roles-list/roles-list.component';

const RolesView = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <button className="btn-primary">Add new role</button>
        <input type="text" placeholder="Search roles" className="text-input" />
      </div>
      <RolesList />
    </div>
  );
};

export default RolesView;
