import React, { useState } from 'react';

const ApplicationAddForm = ({ createAction, setVisibility }) => {
  const [name, setName] = useState('');
  const [key, setKey] = useState('');

  const handleCreate = async () => {
    await createAction(name, key);
    setVisibility(false);
  };

  return (
    <tr>
      <td className="table-row-item">&nbsp;</td>
      <td className="table-row-item w-1/4">
        <input
          type="text"
          placeholder="Application name"
          className="text-input w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </td>
      <td className="table-row-item w-1/3">
        <input
          type="text"
          placeholder="Access key"
          className="text-input w-full"
          value={key}
          onChange={(event) => setKey(event.target.value)}
        />
      </td>
      <td className="table-row-item">&nbsp;</td>
      <td className="table-row-item">
        <div className="flex items-center">
          <button className="btn-primary w-24 mr-2" onClick={handleCreate}>
            Create
          </button>
          <button
            className="btn-primary w-24"
            onClick={() => setVisibility(false)}
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ApplicationAddForm;
