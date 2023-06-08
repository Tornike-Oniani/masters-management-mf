import React from 'react';
import { NavLink } from 'react-router-dom';

import BrowseIcon from '../../assets/folder-open.svg';
import EditIcon from '../../assets/pencil-icon.svg';

const ApplicationItem = ({ data }) => {
  const { id, name, key, permissions } = data;

  return (
    <tr className="text-base text-gray-700">
      <td className="table-row-item">{id}</td>
      <td className="table-row-item w-1/4">{name}</td>
      <td className="table-row-item w-1/3">{key}</td>
      <td className="table-row-item">{permissions}</td>
      <td className="table-row-item">
        <div className="flex items-center">
          <NavLink className="action-link mr-2" to={`./${id}`}>
            <BrowseIcon className="fill-gray-500 mr -1" />
            <span>Browse</span>
          </NavLink>
          <NavLink className="action-link">
            <EditIcon className="fill-gray-500 mr-1" />
            <span>Edit</span>
          </NavLink>
        </div>
      </td>
    </tr>
  );
};

export default ApplicationItem;
