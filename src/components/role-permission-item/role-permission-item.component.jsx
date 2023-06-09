import React, { useState } from 'react';

const RolePermissionItem = ({ name, value, application, assigned }) => {
  const [isChecked, setIsChecked] = useState(assigned);

  const handleCheck = (event) => {
    setIsChecked(!isChecked);
  };

  return (
    <tr>
      <td className="border-r border-gray-300 p-3">{name}</td>
      <td className="border-r border-gray-300 p-3">{value}</td>
      <td className="border-r border-gray-300 p-3">{application}</td>
      <td className="p-3">
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      </td>
    </tr>
  );
};

export default RolePermissionItem;
