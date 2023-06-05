import React from 'react';

const RolesList = () => {
  const roles = [
    {
      id: 1,
      name: 'Teacher',
    },
    {
      id: 2,
      name: 'Auditor',
    },
    {
      id: 3,
      name: 'Manager',
    },
    {
      id: 4,
      name: 'Analyst',
    },
  ];

  return (
    <div className="flex flex-wrap p-4 bg-gray-100">
      {roles.map((role) => {
        return (
          <div className="text-base text-white bg-cst-lavender-700 px-3 py-2 rounded mr-2">
            {role.name}
          </div>
        );
      })}
    </div>
  );
};

export default RolesList;
