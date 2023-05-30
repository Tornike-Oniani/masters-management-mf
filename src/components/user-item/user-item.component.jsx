import React from 'react';

const UserItem = ({ data }) => {
  const { id, firstName, lastName, email } = data;

  return (
    <tr>
      <td className="table-row-item">{id}</td>
      <td className="table-row-item">{firstName}</td>
      <td className="table-row-item">{lastName}</td>
      <td className="table-row-item">{email}</td>
    </tr>
  );
};

export default UserItem;
