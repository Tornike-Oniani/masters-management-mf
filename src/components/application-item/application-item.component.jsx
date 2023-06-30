import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { updateApplication } from '../../services/applications';

import BrowseIcon from '../../assets/folder-open.svg';
import EditIcon from '../../assets/pencil-icon.svg';

const ApplicationItem = ({ data, updateAction }) => {
  const { id, name, key, permissions } = data;

  const [isInEditMode, setIsInEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedKey, setUpdatedKey] = useState(key);

  const handleUpdate = async () => {
    const updatedApplication = await updateApplication(
      id,
      updatedName,
      updatedKey
    );
    updateAction(id, updatedApplication.name, updatedApplication.key);
    setIsInEditMode(false);
  };

  const renderMode = () => {
    if (isInEditMode) {
      return (
        <tr className="flex flex-col text-base text-gray-700 border border-yellow-500 rounded p-2 mb-3 md:m-0 md:border-b md:rounded-none md:p-0 md:table-row">
          <td className="table-row-item hidden md:table-cell md:border-l-8 md:border-yellow-500">
            {id}
          </td>
          <td className="mb-3 md:m-0 md:table-row-item md:w-1/4">
            <span className="block text-lg font-semibold text-cst-text-gray-800 mb-1 md:hidden">
              Name:
            </span>
            <input
              type="text"
              className="text-input-small w-full"
              value={updatedName}
              onChange={(event) => setUpdatedName(event.target.value)}
            />
          </td>
          <td className="mb-3 md:m-0 md:table-row-item md:w-1/3">
            <span className="block text-lg font-semibold text-cst-text-gray-800 mb-1 md:hidden">
              Key:
            </span>
            <input
              type="text"
              className="text-input-small w-full"
              value={updatedKey}
              onChange={(event) => setUpdatedKey(event.target.value)}
            />
          </td>
          <td className="table-row-item hidden md:table-cell">{permissions}</td>
          <td className="md:table-row-item">
            <div className="flex items-center">
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
      <tr className="flex flex-col text-base text-gray-700 border border-gray-300 rounded p-2 mb-3 md:m-0 md:border-b md:rounded-none md:p-0 md:table-row">
        <td className="table-row-item hidden md:table-cell">{id}</td>
        <td className="mb-3 md:m-0 md:table-row-item md:w-1/4">
          <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
            Name:
          </span>
          {name}
        </td>
        <td className="mb-3 md:m-0 md:table-row-item md:w-1/3">
          <span className="block mb-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
            Key:
          </span>
          {key}
        </td>
        <td className="mb-3 md:m-0 flex items-center md:table-cell md:table-row-item">
          <span className="block mr-1 text-base text-cst-text-gray-800 font-semibold md:hidden">
            Permissions:
          </span>
          {permissions}
        </td>
        <td className="self-start md:table-row-item">
          <div className="flex flex-row md:flex-col lg:flex-row">
            <NavLink
              className="action-link mr-2 md:mr-0 md:mb-2 lg:mb-0 lg:mr-2"
              to={`./${id}`}
            >
              <BrowseIcon className="fill-gray-500 mr -1" />
              <span>Browse</span>
            </NavLink>
            <button
              className="action-link"
              onClick={() => setIsInEditMode(true)}
            >
              <EditIcon className="fill-gray-500 mr-1" />
              <span>Edit</span>
            </button>
          </div>
        </td>
      </tr>
    );
  };

  return renderMode();
};

export default ApplicationItem;
