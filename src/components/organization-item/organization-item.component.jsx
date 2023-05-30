import React from 'react';
import { NavLink } from 'react-router-dom';

import BrowseIcon from '../../assets/folder-open.svg';
import EditIcon from '../../assets/pencil-icon.svg';

const OrganizationItem = ({ data }) => {
  const { id, name, roles, applications, users } = data;
  return (
    <tr className="text-base text-gray-700">
      <td className="table-row-item">{id}</td>
      <td className="table-row-item w-1/2">{name}</td>
      <td className="table-row-item">{roles}</td>
      <td className="table-row-item">{applications}</td>
      <td className="table-row-item">{users}</td>
      <td className="table-row-item">
        <div className="flex items-center justify-start">
          <NavLink to={`/${id}`} className="action-link mr-2">
            {<BrowseIcon className="fill-gray-500 mr-1" />}
            <span>Browse</span>
          </NavLink>
          <div className="action-link">
            {<EditIcon className="fill-gray-500 mr-1" />}
            <span>Edit</span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default OrganizationItem;
