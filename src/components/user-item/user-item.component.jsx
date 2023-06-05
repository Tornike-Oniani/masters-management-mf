import React from 'react';
import { NavLink } from 'react-router-dom';

import EditIcon from '../../assets/pencil-icon.svg';

const UserItem = ({ data }) => {
  const { id, firstName, lastName, email, roles } = data;

  const renderRoles = (roles) => {
    const result = [];

    for (let i = 0; i < roles.length; i++) {
      if (i > 1) {
        result.push(
          <span
            key={i}
            className="text-sm text-cst-lavender-700 border border-cst-lavender-700 rounded p-1"
          >
            +{roles.length - 2}
          </span>
        );
        break;
      }

      result.push(
        <span
          key={i}
          className="text-sm text-white bg-cst-lavender-700 p-1 rounded mr-1"
        >
          {roles[i]}
        </span>
      );
    }

    return result;
  };

  return (
    <tr className="text-base text-gray-700">
      <td className="table-row-item">{id}</td>
      <td className="table-row-item w-1/4">{firstName}</td>
      <td className="table-row-item w-1/4">{lastName}</td>
      <td className="table-row-item w-1/4">{email}</td>
      <td className="table-row-item w-1/4">{renderRoles(roles)}</td>
      <td className="table-row-item">
        <div className="flex items-center justify-start">
          <div className="action-link">
            {<EditIcon className="fill-gray-500 mr-1" />}
            <span>Edit</span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default UserItem;
