import React, { useState } from 'react';

const UserAddForm = ({ createAction, setVisibility }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreate = async () => {
    await createAction(firstName, lastName, email);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <tr className="flex flex-col text-base text-gray-700 border border-gray-300 rounded p-2 mb-3 md:p0 md:m-0 md:border-b md:table-row">
      <td className="hidden md:table-cell md:table-row-item">&nbsp;</td>
      <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
        <input
          type="text"
          className="text-input w-full"
          placeholder="First name"
        />
      </td>
      <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
        <input
          type="text"
          className="text-input w-full"
          placeholder="Last name"
        />
      </td>
      <td className="mb-2 md:m-0 md:table-row-item md:w-1/4">
        <input type="text" className="text-input w-full" placeholder="Email" />
      </td>
      <td className="hidden md:table-cell md:table-row-item md:w-1/4">
        &nbsp;
      </td>
      <td className="md:table-row-item">
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

export default UserAddForm;
