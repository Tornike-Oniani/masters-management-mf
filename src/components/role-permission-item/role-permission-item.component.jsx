import React, { useState, useEffect } from 'react';

import StyledCheckbox from '../styled-checkbox/styled-checkbox.component';

const RolePermissionItem = ({
  id,
  name,
  application,
  assigned,
  assignAction,
}) => {
  const handleCheck = (event) => {
    assignAction(id, event.target.checked);
  };

  return (
    <tr>
      <td className="border-r border-gray-300 p-3">{name}</td>
      <td className="border-r border-gray-300 p-3">{application}</td>
      <td className="p-3 whitespace-nowrap w-[1%]">
        {/*<input type="checkbox" checked={assigned} onChange={handleCheck} />*/}
        <StyledCheckbox
          id={id}
          name=""
          checked={assigned}
          onChange={handleCheck}
        />
      </td>
    </tr>
  );
};

export default RolePermissionItem;
