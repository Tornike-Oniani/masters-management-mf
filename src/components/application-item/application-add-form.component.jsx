import React, { useState } from 'react';

const ApplicationAddForm = ({ createAction, setVisibility }) => {
  const [name, setName] = useState('');
  const [key, setKey] = useState('');

  const handleCreate = async () => {
    await createAction(name, key);
    setVisibility(false);
  };

  return (
    <>
      <tr className="hidden md:table-row">
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

      <div className="flex flex-col p-3 border border-gray-400 rounded mb-3 md:hidden">
        <input
          type="text"
          placeholder="Application name"
          className="text-input w-full mb-3"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Access key"
          className="text-input w-full"
          value={key}
          onChange={(event) => setKey(event.target.value)}
        />
        <div className="flex items-center justify-start mt-3">
          <button className="btn-primary mr-2" onClick={handleCreate}>
            Create
          </button>
          <button
            className="btn-primary w-24"
            onClick={() => setVisibility(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplicationAddForm;
