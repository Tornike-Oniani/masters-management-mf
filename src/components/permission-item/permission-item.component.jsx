import React, { useState } from 'react';

import EditIcon from '../../assets/pencil-icon.svg';
import DeleteIcon from '../../assets/bin.svg';

const PermissionItem = ({ id, name, value, updateAction }) => {
  const [newName, setNewName] = useState(name);
  const [newValue, setNewValue] = useState(value);
  const [editMode, setEditMode] = useState(false);

  const handleSave = async () => {
    await updateAction(id, newName, newValue);
    setEditMode(false);
  };

  const handleCancel = () => {
    setNewName(name);
    setNewValue(value);
    setEditMode(false);
  };

  const renderMode = () => {
    if (editMode) {
      return (
        <div className="grid grid-cols-[8px_max-content_min-content] bg-white mr-4 mb-4">
          <div className="h-full bg-yellow-500 rounded-l">&nbsp;</div>
          <div className="border-y border-yellow-500 p-3 grid grid-cols-[max-content_max-content] grid-rows-2 gap-2">
            <span className="font-bold">Name: </span>
            <input
              type="text"
              className="text-input-small"
              value={newName}
              placeholder="Name"
              onChange={(event) => setNewName(event.target.value)}
            />
            <span className="font-bold">Value: </span>
            <input
              type="text"
              className="text-input-small"
              placeholder="Value"
              value={newValue}
              onChange={(event) => setNewValue(event.target.value)}
            />
          </div>
          <div className="border border-yellow-500 rounded-r p-3">
            <button
              className="btn-primary-small w-full mb-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button className="btn-primary-small w-full" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-[8px_max-content_min-content] bg-white mr-4 mb-4">
        <div className="h-full bg-cst-cyan-800 rounded-l">&nbsp;</div>
        <div className="border-y border-gray-500 p-3 grid grid-cols-[max-content_max-content] grid-rows-2 gap-2">
          <span className="font-bold">Name: </span>
          <span>{name}</span>
          <span className="font-bold">Value: </span>
          <span>{value}</span>
        </div>
        <div className="border border-gray-500 rounded-r p-3">
          <div className="action-link mb-1" onClick={() => setEditMode(true)}>
            {<EditIcon className="fill-gray-500 mr-1" />}
            <span>Edit</span>
          </div>
          <div className="action-link" onClick={() => setEditMode(true)}>
            {<DeleteIcon className="fill-gray-500 mr-1" />}
            <span>Delete</span>
          </div>
        </div>
      </div>
    );
  };

  return renderMode();
};

export default PermissionItem;
