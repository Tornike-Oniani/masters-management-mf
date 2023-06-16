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
        <tr className="text-base text-gray-700">
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
              <button className="btn-primary w-24 mr-2" onClick={handleUpdate}>
                Update
              </button>
              <button
                className="btn-primary"
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
      <tr className="text-base text-gray-700">
        <td className="table-row-item">{id}</td>
        <td className="table-row-item w-1/4">{name}</td>
        <td className="table-row-item w-1/3">{key}</td>
        <td className="table-row-item">{permissions}</td>
        <td className="table-row-item">
          <div
            className="flex items-center"
            onClick={() => setIsInEditMode(true)}
          >
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

  return renderMode();
};

export default ApplicationItem;
