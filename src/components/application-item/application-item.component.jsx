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
        <>
          <tr className="text-base text-gray-700 hidden md:table-row">
            <td className="table-row-item">{id}</td>
            <td className="table-row-item w-1/4">
              <input
                type="text"
                className="text-input w-full"
                value={updatedName}
                onChange={(event) => setUpdatedName(event.target.value)}
              />
            </td>
            <td className="table-row-item w-1/3">
              <input
                type="text"
                className="text-input w-full"
                value={updatedKey}
                onChange={(event) => setUpdatedKey(event.target.value)}
              />
            </td>
            <td className="table-row-item">{permissions}</td>
            <td className="table-row-item">
              <div className="flex items-center">
                <button
                  className="btn-primary-small mr-2"
                  onClick={handleUpdate}
                >
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

          <div className="flex flex-col p-3 border border-gray-400 rounded mb-3 md:hidden">
            <label
              htmlFor="app-new-name"
              className="text-cst-text-gray-800 font-semibold text-base mb-1"
            >
              Name:
            </label>
            <input
              id="app-new-name"
              type="text"
              className="text-input w-full mb-3"
              value={updatedName}
              onChange={(event) => setUpdatedName(event.target.value)}
            />
            <label
              htmlFor="app-new-key"
              className="text-cst-text-gray-800 font-semibold text-base mb-1"
            >
              Key:
            </label>
            <input
              id="app-new-key"
              type="text"
              className="text-input w-full"
              value={updatedKey}
              onChange={(event) => setUpdatedKey(event.target.value)}
            />
            <div className="flex items-center justify-start mt-4">
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
          </div>
        </>
      );
    }

    return (
      <>
        <tr className="text-base text-gray-700 hidden md:table-row">
          <td className="table-row-item">{id}</td>
          <td className="table-row-item w-1/4">{name}</td>
          <td className="table-row-item w-1/3">{key}</td>
          <td className="table-row-item">{permissions}</td>
          <td className="table-row-item">
            <div className="flex flex-col lg:flex-row">
              <NavLink
                className="action-link mb-2 lg:mb-0 lg:mr-2"
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

        <div className="flex flex-col p-3 border border-gray-400 rounded mb-3 md:hidden">
          <h4 className="font-bold text-lg bg-cst-gray-800 p-2 self-start rounded-md text-cst-text-gray-800">
            {name}
          </h4>
          <div className="flex items-center">
            <span>Key:</span>
            <span>{key}</span>
          </div>
          <div className="flex items-center">
            <span>Permissions:</span>
            <span>{permissions}</span>
          </div>
          <div className="flex items-center justify-start mt-3">
            <NavLink className="action-link mr-2" to={`./${id}`}>
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
        </div>
      </>
    );
  };

  return renderMode();
};

export default ApplicationItem;
