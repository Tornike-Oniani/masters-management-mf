import React, { useState, useEffect } from 'react';

import RolesList from '../roles-list/roles-list.component';
import RolePermissionItem from '../role-permission-item/role-permission-item.component';

const RolesView = () => {
  const applications = [
    {
      id: 1,
      name: 'Application 1',
      permissions: [
        {
          id: 1,
          name: 'Create article',
          value: 'article_create',
        },
        {
          id: 2,
          name: 'Read article',
          value: 'article_read',
        },
        {
          id: 3,
          name: 'Update article',
          value: 'article_update',
        },
        {
          id: 4,
          name: 'Delete article',
          value: 'article_delete',
        },
        {
          id: 5,
          name: 'Create bookmark',
          value: 'article_bookmark',
        },
        {
          id: 6,
          name: 'Read bookmark',
          value: 'bookmark_read',
        },
        {
          id: 7,
          name: 'Update bookmark',
          value: 'bookmark_update',
        },
        {
          id: 8,
          name: 'Delete bookmark',
          value: 'bookmark_delete',
        },
      ],
    },
    {
      id: 2,
      name: 'Application 2',
      permissions: [
        {
          id: 1,
          name: 'Create product',
          value: 'product_create',
        },
        {
          id: 2,
          name: 'Read product',
          value: 'product_read',
        },
        {
          id: 3,
          name: 'Update product',
          value: 'product_update',
        },
        {
          id: 4,
          name: 'Delete product',
          value: 'product_delete',
        },
        {
          id: 5,
          name: 'Create advertise',
          value: 'article_advertise',
        },
        {
          id: 6,
          name: 'Read advertise',
          value: 'advertise_read',
        },
        {
          id: 7,
          name: 'Update advertise',
          value: 'advertise_update',
        },
        {
          id: 8,
          name: 'Delete advertise',
          value: 'advertise_delete',
        },
      ],
    },
  ];
  const roles = [
    {
      id: 1,
      name: 'Teacher',
      permissions: {
        'Application 1': [
          {
            id: 1,
            name: 'Create article',
            value: 'article_create',
          },
          {
            id: 2,
            name: 'Read article',
            value: 'article_read',
          },
          {
            id: 3,
            name: 'Read bookmark',
            value: 'bookmark_read',
          },
        ],
        'Application 2': [
          {
            id: 4,
            name: 'Create product',
            value: 'product_create',
          },
          {
            id: 5,
            name: 'Read product',
            value: 'product_read',
          },
          {
            id: 6,
            name: 'Update product',
            value: 'product_update',
          },
          {
            id: 7,
            name: 'Delete product',
            value: 'product_delete',
          },
        ],
      },
    },
    {
      id: 2,
      name: 'Manager',
      permissions: {
        'Application 1': [
          {
            id: 2,
            name: 'Read article',
            value: 'article_read',
          },
          {
            id: 3,
            name: 'Read bookmark',
            value: 'bookmark_read',
          },
          {
            id: 15,
            name: 'Update bookmark',
            value: 'bookmark_update',
          },
        ],
        'Application 2': [
          {
            id: 4,
            name: 'Create product',
            value: 'product_create',
          },
          {
            id: 5,
            name: 'Read product',
            value: 'product_read',
          },
          {
            id: 6,
            name: 'Update product',
            value: 'product_update',
          },
          {
            id: 7,
            name: 'Delete product',
            value: 'product_delete',
          },
        ],
      },
    },
  ];

  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [selectedApplication, setSelectedApplication] = useState(
    applications[0]
  );

  return (
    <div>
      <div className="flex">
        <div className="flex flex-col bg-gray-100 min-h-screen p-4">
          <input
            type="text"
            placeholder="Search role"
            className="px-3 py-2 border border-gray-400 rounded mb-3"
          />
          {roles.map((role) => {
            return (
              <div
                key={role.name}
                className={
                  'px-3 py-3 hover:bg-gray-200 cursor-pointer rounded' +
                  (selectedRole.name === role.name ? ' bg-gray-200' : '')
                }
                onClick={() => setSelectedRole(role)}
              >
                {role.name}
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col p-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-base font-semibold block mr-3">
                View permissions for:{' '}
              </span>
              <select
                name="applications"
                id="applications"
                className="px-3 py-2 border border-gray-500 bg-white rounded"
              >
                {applications.map((app) => {
                  return (
                    <option value={app.name} key={app.id}>
                      {app.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="">
            <table className="w-full">
              <thead className="border-b border-gray-300 font-semibold">
                <tr>
                  <td className="border-r border-gray-300 p-3">Name</td>
                  <td className="border-r border-gray-300 p-3">Value</td>
                  <td className="border-r border-gray-300 p-3">Application</td>
                  <td className="p-3">Assigned?</td>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {selectedApplication.permissions.map((permission) => {
                  return (
                    <RolePermissionItem
                      key={permission.id}
                      name={permission.name}
                      value={permission.value}
                      application={selectedApplication.name}
                      assigned={selectedRole.permissions[
                        selectedApplication.name
                      ].find((p) => p.name === permission.name)}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesView;
