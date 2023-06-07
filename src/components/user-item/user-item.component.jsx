import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import RoleManagerDropdown from '../role-manager-dropdown/role-manager-dropdown.component';

import EditIcon from '../../assets/pencil-icon.svg';
import ProfileIcon from '../../assets/profile.svg';

const UserItem = ({ data }) => {
  const { id, firstName, lastName, email, roles } = data;

  // Can be default, edit or roleManagement
  const [displayMode, setDisplayMode] = useState('default');
  const [firstNameTextInput, setFirstNameTextInput] = useState(firstName);
  const [lastNameTextInput, setLastNameTextInput] = useState(lastName);
  const [emailTextInput, setEmailTextInput] = useState(email);

  const handleChange = (event) => {
    if (event.target.name === 'first_name') {
    }

    if (event.target.name === 'last_name') {
    }

    if (event.target.name === 'email') {
    }
  };

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

  const renderMode = () => {
    if (displayMode === 'edit') {
      return (
        <tr className="text-base text-gray-700">
          <td className="table-row-item">{id}</td>
          <td className="table-row-item w-1/4">
            <input
              type="text"
              value={firstNameTextInput}
              onChange={handleChange}
              className="text-input"
              name="first_name"
            />
          </td>
          <td className="table-row-item w-1/4">
            <input
              type="text"
              value={lastNameTextInput}
              onChange={handleChange}
              className="text-input"
              name="last_name"
            />
          </td>
          <td className="table-row-item w-1/4">
            <input
              type="email"
              value={emailTextInput}
              onChange={handleChange}
              className="text-input"
              name="email"
            />
          </td>
          <td className="table-row-item w-1/4">{renderRoles(roles)}</td>
          <td className="table-row-item">
            <div className="flex items-center justify-start">
              <button
                className="btn-primary w-24 mr-2"
                onClick={() => setDisplayMode('default')}
              >
                Save
              </button>
              <button
                className="btn-primary w-24"
                onClick={() => setDisplayMode('default')}
              >
                Cancel
              </button>
            </div>
          </td>
        </tr>
      );
    }

    if (displayMode === 'roleManagement') {
      return (
        <tr className="text-base text-gray-700">
          <td className="table-row-item">{id}</td>
          <td className="table-row-item w-1/4">{firstName}</td>
          <td className="table-row-item w-1/4">{lastName}</td>
          <td className="table-row-item w-1/4">{email}</td>
          <td className="table-row-item w-1/4">
            <RoleManagerDropdown userId={id} roles={roles} />
          </td>
          <td className="table-row-item">
            <div className="flex items-center justify-start">
              <button
                className="btn-primary w-24 mr-2"
                onClick={() => setDisplayMode('default')}
              >
                Save
              </button>
              <button
                className="btn-primary w-24"
                onClick={() => setDisplayMode('default')}
              >
                Cancel
              </button>
            </div>
          </td>
        </tr>
      );
    }

    return (
      <tr className="text-base text-gray-700">
        <td className="table-row-item">{id}</td>
        <td className="table-row-item w-1/4">{firstName}</td>
        <td className="table-row-item w-1/4">{lastName}</td>
        <td className="table-row-item w-1/4">{email}</td>
        <td className="table-row-item w-1/4">{renderRoles(roles)}</td>
        <td className="table-row-item">
          <div className="flex items-center justify-start">
            <div
              className="action-link mr-2"
              onClick={() => setDisplayMode('edit')}
            >
              {<EditIcon className="fill-gray-500 mr-1" />}
              <span>Edit</span>
            </div>
            <div
              className="action-link"
              onClick={() => setDisplayMode('roleManagement')}
            >
              {<ProfileIcon className="fill-gray-500 mr-1" />}
              <span>Manage Roles</span>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return renderMode();
};

export default UserItem;
