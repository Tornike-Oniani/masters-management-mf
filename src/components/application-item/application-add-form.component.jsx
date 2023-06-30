import React, { useState } from 'react';

const ApplicationAddForm = ({ createAction, setVisibility }) => {
  const [name, setName] = useState('');
  const [key, setKey] = useState('');

  const handleCreate = async () => {
    await createAction(name, key);
    setVisibility(false);
  };

  return (
    <tr className="flex flex-col text-base text-gray-700 border border-green-700 rounded p-2 mb-3 md:m-0 md:border-b md:rounded-none md:p-0 md:table-row">
      <td className="table-row-item hidden md:table-cell md:border-l-8 md:border-green-700">
        &nbsp;
      </td>
      <td className="mb-3 md:m-0 md:table-row-item md:w-1/4">
        <input
          type="text"
          placeholder="Application name"
          className="text-input-small w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </td>
      <td className="mb-3 md:m-0 md:table-row-item md:w-1/3">
        <input
          type="text"
          placeholder="Access key"
          className="text-input-small w-full"
          value={key}
          onChange={(event) => setKey(event.target.value)}
        />
      </td>
      <td className="md:table-row-item hidden md:table-cell">&nbsp;</td>
      <td className="md:table-row-item">
        <div className="flex items-center">
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

export default ApplicationAddForm;
