import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import BrowseIcon from '../../assets/folder-open.svg';
import EditIcon from '../../assets/pencil-icon.svg';

const OrganizationItem = ({ data }) => {
  const { id, name, roles, applications, users } = data;

  const [isInEditMode, setIsInEditMode] = useState(false);
  const [nameTextInput, setNameTextInput] = useState(name);

  const handleNameChange = (event) => {
    setNameTextInput(event.target.value);
  };

  const renderMode = () => {
    if (isInEditMode) {
      return (
        <tr className="text-base text-gray-700">
          <td className="table-row-item">{id}</td>
          <td className="table-row-item w-1/2">
            <input
              type="text"
              value={nameTextInput}
              onChange={handleNameChange}
              className="text-input"
            />
          </td>
          <td className="table-row-item">{roles}</td>
          <td className="table-row-item">{applications}</td>
          <td className="table-row-item">{users}</td>
          <td className="table-row-item">
            <div className="flex items-center justify-start">
              <button
                className="btn-primary w-24 mr-2"
                onClick={() => setIsInEditMode(false)}
              >
                Save
              </button>
              <button
                className="btn-primary w-24"
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
            <div className="action-link" onClick={() => setIsInEditMode(true)}>
              {<EditIcon className="fill-gray-500 mr-1" />}
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
