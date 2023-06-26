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
    <>
      <tr className="hidden md:table-row">
        <td className="table-row-item">&nbsp;</td>
        <td className="table-row-item w-1/4">
          <input
            type="text"
            className="text-input w-full"
            placeholder="First name"
          />
        </td>
        <td className="table-row-item w-1/4">
          <input
            type="text"
            className="text-input w-full"
            placeholder="Last name"
          />
        </td>
        <td className="table-row-item w-1/4">
          <input
            type="text"
            className="text-input w-full"
            placeholder="Email"
          />
        </td>
        <td className="table-row-item w-1/4">&nbsp;</td>
        <td className="table-row-item">
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
    </>
  );
};

export default UserAddForm;
