import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import BrowseIcon from '../../assets/folder-open.svg';
import EditIcon from '../../assets/pencil-icon.svg';

const OrganizationItemVertical = ({ data, updateAction }) => {
  const { id, name, roles, applications, users } = data;

  return (
    <div className="flex flex-col p-3 border border-gray-400 rounded mb-3 ">
      <h4 className="font-bold text-lg bg-cst-gray-800 p-2 self-start rounded-md text-cst-text-gray-800">
        {name}
      </h4>
      <div className="flex items-center">
        <span>Roles:</span>
        <span>{roles}</span>
      </div>
      <div className="flex items-center">
        <span>Applications:</span>
        <span>{applications}</span>
      </div>
      <div className="flex items-center">
        <span>Users:</span>
        <span>{users}</span>
      </div>
      <div className="flex items-center justify-start mt-3">
        <NavLink to={`/${data.id}/applications`} className="action-link mr-2">
          {<BrowseIcon className="fill-gray-500 mr-1" />}
          <span>Browse</span>
        </NavLink>
        <div className="action-link" onClick={() => setIsInEditMode(true)}>
          {<EditIcon className="fill-gray-500 mr-1" />}
          <span>Edit</span>
        </div>
      </div>
    </div>
  );
};

export default OrganizationItemVertical;
