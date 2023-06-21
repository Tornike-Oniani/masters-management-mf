import React, { useState } from 'react';

const OrganizationAddForm = ({ createAction, setVisibility }) => {
  const [name, setName] = useState('');

  const handleCreate = async () => {
    await createAction(name);
    setName('');
  };

  return (
    <tr>
      <td className="table-row-item">&nbsp;</td>
      <td className="table-row-item w-1/2">
        <input
          type="text"
          placeholder="Organization name"
          className="text-input w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </td>
      <td className="table-row-item">&nbsp;</td>
      <td className="table-row-item">&nbsp;</td>
      <td className="table-row-item">&nbsp;</td>
      <td className="table-row-item">
        <div className="flex items-center justify-start">
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

export default OrganizationAddForm;
