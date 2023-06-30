import React, { useState } from 'react';

const OrganizationAddForm = ({ createAction, setVisibility }) => {
  const [name, setName] = useState('');

  const handleCreate = async () => {
    await createAction(name);
    setName('');
  };

  return (
    <tr className="flex flex-col border border-green-700 rounded p-2 mb-3 md:p-0 md:m-0 md:rounded-0 md:table-row">
      <td className="table-row-item hidden md:table-cell md:border-l-8 md:border-green-700">
        &nbsp;
      </td>
      <td className="md:table-row-item md:w-1/2">
        <input
          type="text"
          placeholder="Organization name"
          className="text-input-small w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </td>
      <td className="table-row-item hidden md:table-cell">&nbsp;</td>
      <td className="table-row-item hidden md:table-cell">&nbsp;</td>
      <td className="table-row-item hidden md:table-cell">&nbsp;</td>
      <td className="mt-3 md:m-0 md:table-row-item">
        <div className="flex items-center justify-start">
          <button className="btn-primary-small mr-2" onClick={handleCreate}>
            Create
          </button>
          <button
            className="btn-primary-small"
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
