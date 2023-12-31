import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { updateOrganization } from '../../services/organizations';

import BrowseIcon from '../../assets/folder-open.svg';
import EditIcon from '../../assets/pencil-icon.svg';

const OrganizationItem = ({ data, updateAction }) => {
  const { id, name, roles, applications, users } = data;

  const [isInEditMode, setIsInEditMode] = useState(false);
  const [curName, setCurName] = useState(name);
  const [updateName, setUpdateName] = useState(name);

  const handleNameChange = (event) => {
    setUpdateName(event.target.value);
  };

  const handleUpdate = async () => {
    const response = await updateOrganization(id, updateName);
    updateAction(id, updateName);
    setCurName(response.name);
    setUpdateName(response.name);
    setIsInEditMode(false);
  };

  const renderMode = () => {
    if (isInEditMode) {
      return (
        <tr className="flex flex-col text-base text-gray-700 border border-yellow-500 rounded p-2 mb-3 md:p0 md:m-0 md:border-b md:table-row">
          <td className="hidden md:table-cell md:table-row-item md:border-l-8 md:border-yellow-500">
            {id}
          </td>
          <td className="md:table-row-item md:w-1/2">
            <span className="block text-lg font-semibold text-cst-text-gray-800 mb-1 md:hidden">
              Name:
            </span>
            <input
              type="text"
              value={updateName}
              onChange={handleNameChange}
              className="text-input-small w-full"
            />
          </td>
          <td className="hidden md:table-cell md:table-row-item">{roles}</td>
          <td className="hidden md:table-cell md:table-row-item">
            {applications}
          </td>
          <td className="hidden md:table-cell md:table-row-item">{users}</td>
          <td className="mt-3 md:m-0 md:table-row-item">
            <div className="flex items-center justify-start">
              <button className="btn-primary-small mr-2" onClick={handleUpdate}>
                Update
              </button>
              <button
                className="btn-primary-small"
                onClick={() => setIsInEditMode(false)}
              >
                Cancel
              </button>
            </div>
          </td>
        </tr>
      );
    }

    return (
      <tr className="grid grid-cols-[repeat(3,_max-content)_1fr] grid-rows-[repeat(3,_min-content)] gap-x-2 gap-y-3 justify-items-start text-base text-gray-700 border border-gray-300 rounded p-0 mb-3 shadow-md md:shadow-none md:p0 md:m-0 md:border-b md:rounded-none md:table-row">
        <td className="table-row-item hidden md:table-cell">{id}</td>
        <td className="p-3 col-span-4 justify-self-stretch font-bold text-lg text-cst-text-gray-800 bg-cst-gray-800 rounded md:text-base md:text-cst-text-gray-900 md:rounded-0 md:font-normal md:bg-white md:table-row-item md:w-1/2">
          {curName}
        </td>
        <td className="flex flex-col items-center p-0 border border-gray-300 rounded text-lg ml-2 md:m-0 md:text-base md:border-0 md:rounded-0 md:table-row-item md:table-cell">
          {roles}
          <span className="block bg-cst-cyan-800 text-base text-white py-1 px-2 mt-1 md:m-0 md:hidden">
            Roles
          </span>
        </td>
        <td className="flex flex-col items-center p-0 border border-gray-300 rounded text-lg md:text-base md:border-0 md:rounded-0 md:table-row-item md:table-cell">
          {applications}
          <span className="block bg-cst-cyan-800 text-base text-white py-1 px-2 mt-1 md:m-0 md:hidden">
            Apps
          </span>
        </td>
        <td className="flex flex-col items-center p-0 border border-gray-300 rounded text-lg md:text-base md:border-0 md:rounded-0 md:table-row-item md:table-cell">
          {users}
          <span className="block bg-cst-cyan-800 text-base text-white py-1 px-2 mt-1 md:m-0 md:hidden">
            Users
          </span>
        </td>
        <td className="ml-2 mb-2 md:m-0 col-span-3 md:table-row-item">
          <div className="flex items-center justify-start">
            <NavLink
              to={`/${data.id}/applications`}
              className="action-link group mr-2"
            >
              {
                <BrowseIcon className="fill-gray-500 mr-1 group-hover:fill-white transition-colors duration-300" />
              }
              <span>Browse</span>
            </NavLink>
            <div
              className="action-link group"
              onClick={() => setIsInEditMode(true)}
            >
              {
                <EditIcon className="fill-gray-500 mr-1 group-hover:fill-white transition-colors duration-300" />
              }
              <span>Edit</span>
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return renderMode();
};

export default OrganizationItem;
