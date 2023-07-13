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
  const [isManager, setIsManager] = useState(false);

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
            className="text-sm text-cst-cyan-800 border border-cst-cyan-800 rounded p-1"
          >
            +{roles.length - 2}
          </span>
        );
        break;
      }

      result.push(
        <span
          key={i}
          className="text-sm text-white bg-cst-cyan-900 p-1 rounded mr-1"
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
        <tr className="flex flex-col text-base text-gray-700 border border-yellow-500 rounded p-2 mb-3 md:p0 md:m-0 md:border-b md:table-row">
          <td className="hidden md:table-cell md:table-row-item md:border-l-8 md:border-yellow-500">
            {id}
          </td>
          <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
            <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
              First name:
            </span>
            <input
              type="text"
              value={firstNameTextInput}
              onChange={handleChange}
              className="text-input-small w-full"
              name="first_name"
            />
          </td>
          <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
            <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
              Last name:
            </span>
            <input
              type="text"
              value={lastNameTextInput}
              onChange={handleChange}
              className="text-input-small w-full"
              name="last_name"
            />
          </td>
          <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
            <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
              Email:
            </span>
            <input
              type="email"
              value={emailTextInput}
              onChange={handleChange}
              className="text-input-small w-full"
              name="email"
            />
          </td>
          <td className="hidden md:table-cell md:table-row-item md:w-1/4">
            {renderRoles(roles)}
          </td>
          <td className="md:table-row-item">
            <div className="flex items-center justify-start">
              <button
                className="btn-primary-small mr-2"
                onClick={() => setDisplayMode('default')}
              >
                Save
              </button>
              <button
                className="btn-primary-small"
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
        <tr className="flex flex-col text-base text-gray-700 border border-cst-cyan-800 rounded p-2 mb-3 md:p0 md:m-0 md:border-b md:table-row">
          <td className="hidden md:table-row-item md:table-cell md:border-l-8 md:border-cst-cyan-800">
            {id}
          </td>
          <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
            <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
              First name:
            </span>
            {firstName}
          </td>
          <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
            <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
              Last name:
            </span>
            {lastName}
          </td>
          <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
            <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
              Email:
            </span>
            {email}
          </td>
          <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
            <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
              Roles:
            </span>
            <RoleManagerDropdown userId={id} roles={roles} />
          </td>
          <td className="md:table-row-item">
            <div className="flex items-center justify-start">
              <button
                className="btn-primary-small mr-2"
                onClick={() => setDisplayMode('default')}
              >
                Save
              </button>
              <button
                className="btn-primary-small"
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
      <tr className="flex flex-col text-base text-gray-700 border border-gray-300 rounded p-2 mb-3 md:p0 md:m-0 md:border-b md:table-row">
        <td className="hidden md:table-row-item md:table-cell">{id}</td>
        <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
          <span className="inline-block mr-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
            First name:
          </span>
          {firstName}
        </td>
        <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
          <span className="inline-block mr-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
            Last name:
          </span>
          {lastName}
        </td>
        <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
          <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
            Email:
          </span>
          {email}
        </td>
        <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
          <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
            Roles:
          </span>
          {renderRoles(roles)}
        </td>
        <td className="mt-3 justify-self-start md:m-0 md:table-row-item whitespace-nowrap">
          <div className="flex flex-row md:flex-col min-[1430px]:flex-row">
            <div
              className="action-link mr-2 md:mr-0 md:mb-2 2xl:mb-0 2xl:mr-2"
              onClick={() => setDisplayMode('edit')}
            >
              {<EditIcon className="block fill-inherit mr-1" />}
              <span>Edit</span>
            </div>
            <div
              className="action-link md:mr-0 md:mb-2 2xl:mb-0 2xl:mr-2"
              onClick={() => setDisplayMode('roleManagement')}
            >
              {<ProfileIcon className="block fill-inherit mr-1" />}
              <span>Roles</span>
            </div>
            <div
              className={
                'action-link md:mr-0 md:mb-2 2xl:mb-0 2xl:mr-2 ' +
                (isManager
                  ? 'b-green-500 bg-green-500 text-white fill-white'
                  : '')
              }
              onClick={() => setIsManager(!isManager)}
            >
              {<ProfileIcon className="block fill-inherit mr-1" />}
              <span>Manager</span>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return renderMode();
};

export default UserItem;
